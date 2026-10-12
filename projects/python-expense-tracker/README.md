# Expense Tracker (Python)

A command-line expense tracker written in Python for an academic
programming assignment. It records everyday expenses, groups them by
category, and stores everything in a JSON file so the data is still there
the next time you run it.

## Features

- Add an expense with an amount, category, optional note, and date.
- List all recorded expenses in a readable table.
- Show totals grouped by category, with an overall total.
- Save and load records automatically using `expenses.json`.
- Validate input so invalid amounts or empty categories are rejected.

## Concepts demonstrated

- Object-oriented programming with `@dataclass` and a manager class.
- File persistence with the `json` module (standard library only).
- Input validation and defensive error handling.

## Requirements

- Python 3.10 or newer.

## Run it

```bash
python expense_tracker.py
```

Then follow the on-screen menu.

## Notes

The program stores its data in `expenses.json` next to the script. Delete
that file to start over. `expenses.json` is created automatically and is
not committed to the repository.
