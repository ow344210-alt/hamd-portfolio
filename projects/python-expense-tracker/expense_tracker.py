"""Expense Tracker
================

A small command-line application for recording everyday expenses and
reviewing where the money goes.

It is an academic project written to practise:

* Object-oriented programming (a dataclass plus a manager class).
* Reading and writing JSON for simple, dependency-free persistence.
* Validating user input so the program does not crash on bad values.

Run it with:

    python expense_tracker.py

No third-party packages are required.
"""

from __future__ import annotations

import json
from dataclasses import asdict, dataclass, field
from datetime import date
from pathlib import Path

DATA_FILE = Path(__file__).with_name("expenses.json")


@dataclass
class Expense:
    """A single expense record."""

    amount: float
    category: str
    note: str = ""
    date: str = field(default_factory=lambda: date.today().isoformat())

    def to_dict(self) -> dict:
        return asdict(self)

    @staticmethod
    def from_dict(data: dict) -> "Expense":
        return Expense(
            amount=float(data["amount"]),
            category=str(data["category"]),
            note=str(data.get("note", "")),
            date=str(data.get("date", date.today().isoformat())),
        )


class ExpenseTracker:
    """Stores expenses in memory and keeps them in sync with a JSON file."""

    def __init__(self, data_file: Path | str = DATA_FILE) -> None:
        self.data_file = Path(data_file)
        self.expenses: list[Expense] = []
        self.load()

    def load(self) -> None:
        if not self.data_file.exists():
            self.expenses = []
            return

        try:
            raw = json.loads(self.data_file.read_text(encoding="utf-8"))
            self.expenses = [Expense.from_dict(item) for item in raw]
        except (json.JSONDecodeError, KeyError, TypeError, ValueError):
            print("Warning: could not read saved data. Starting with an empty list.")
            self.expenses = []

    def save(self) -> None:
        payload = [expense.to_dict() for expense in self.expenses]
        self.data_file.write_text(
            json.dumps(payload, indent=2), encoding="utf-8"
        )

    def add(self, amount: float, category: str, note: str = "") -> Expense:
        if amount <= 0:
            raise ValueError("Amount must be greater than zero.")
        if not category.strip():
            raise ValueError("Category cannot be empty.")

        expense = Expense(amount=amount, category=category.strip(), note=note.strip())
        self.expenses.append(expense)
        self.save()
        return expense

    def total(self, category: str | None = None) -> float:
        items = self.expenses
        if category:
            items = [e for e in items if e.category.lower() == category.lower()]
        return round(sum(e.amount for e in items), 2)

    def by_category(self) -> dict[str, float]:
        summary: dict[str, float] = {}
        for expense in self.expenses:
            summary[expense.category] = round(
                summary.get(expense.category, 0.0) + expense.amount, 2
            )
        return dict(sorted(summary.items(), key=lambda item: item[1], reverse=True))


def _prompt_amount() -> float:
    while True:
        raw = input("Amount: ").strip()
        try:
            amount = float(raw)
        except ValueError:
            print("Please enter a number, for example 250.50")
            continue
        if amount <= 0:
            print("The amount must be greater than zero.")
            continue
        return amount


def _print_list(expenses: list[Expense]) -> None:
    if not expenses:
        print("No expenses recorded yet.")
        return

    print(f"\n{'Date':<12}{'Category':<16}{'Amount':>10}  Note")
    print("-" * 56)
    for expense in expenses:
        print(
            f"{expense.date:<12}{expense.category:<16}"
            f"{expense.amount:>10.2f}  {expense.note}"
        )
    print("-" * 56)


def main() -> None:
    tracker = ExpenseTracker()

    menu = (
        "\nExpense Tracker\n"
        "1) Add an expense\n"
        "2) List expenses\n"
        "3) Show total by category\n"
        "4) Quit\n"
    )

    while True:
        print(menu)
        choice = input("Choose an option: ").strip()

        if choice == "1":
            amount = _prompt_amount()
            category = input("Category: ").strip() or "Uncategorised"
            note = input("Note (optional): ")
            try:
                expense = tracker.add(amount, category, note)
            except ValueError as error:
                print(f"Could not add expense: {error}")
                continue
            print(f"Added {expense.amount:.2f} under '{expense.category}'.")

        elif choice == "2":
            _print_list(tracker.expenses)

        elif choice == "3":
            summary = tracker.by_category()
            if not summary:
                print("No expenses recorded yet.")
                continue
            print()
            for category, total in summary.items():
                print(f"{category:<16}{total:>10.2f}")
            print("-" * 26)
            print(f"{'Total':<16}{tracker.total():>10.2f}")

        elif choice == "4":
            print("Goodbye!")
            break

        else:
            print("Please choose a number between 1 and 4.")


if __name__ == "__main__":
    try:
        main()
    except (KeyboardInterrupt, EOFError):
        print("\nExiting.")
