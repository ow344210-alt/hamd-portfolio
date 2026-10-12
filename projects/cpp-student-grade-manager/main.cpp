// Student Grade Manager
// =====================
//
// A small console application that stores students and their grades,
// calculates averages and letter grades, and persists records to a
// plain-text file.
//
// It is an academic project written to practise:
//
//   * Classes and encapsulation in C++.
//   * The standard library (std::vector, std::string, <algorithm>).
//   * File input and output with std::ifstream / std::ofstream.
//
// Build and run:
//
//   g++ -std=c++17 -Wall -Wextra main.cpp -o grade_manager
//   ./grade_manager        (or grade_manager.exe on Windows)

#include <fstream>
#include <iomanip>
#include <iostream>
#include <numeric>
#include <sstream>
#include <string>
#include <vector>

class Student {
 public:
  Student(std::string name, std::vector<double> grades)
      : name_(std::move(name)), grades_(std::move(grades)) {}

  const std::string& name() const { return name_; }
  const std::vector<double>& grades() const { return grades_; }

  void addGrade(double grade) { grades_.push_back(grade); }

  double average() const {
    if (grades_.empty()) {
      return 0.0;
    }
    const double sum = std::accumulate(grades_.begin(), grades_.end(), 0.0);
    return sum / static_cast<double>(grades_.size());
  }

  std::string letterGrade() const {
    const double avg = average();
    if (avg >= 85.0) return "A";
    if (avg >= 75.0) return "B";
    if (avg >= 65.0) return "C";
    if (avg >= 50.0) return "D";
    return "F";
  }

 private:
  std::string name_;
  std::vector<double> grades_;
};

class GradeManager {
 public:
  void addStudent(const std::string& name, const std::vector<double>& grades) {
    students_.emplace_back(name, grades);
  }

  bool empty() const { return students_.empty(); }

  void printAll() const {
    if (students_.empty()) {
      std::cout << "No students recorded yet.\n";
      return;
    }

    std::cout << "\n" << std::left << std::setw(22) << "Student"
              << std::right << std::setw(9) << "Average" << std::setw(8)
              << "Grade" << "\n";
    std::cout << std::string(39, '-') << "\n";

    for (const Student& student : students_) {
      std::cout << std::left << std::setw(22) << student.name() << std::right
                << std::setw(9) << std::fixed << std::setprecision(2)
                << student.average() << std::setw(8) << student.letterGrade()
                << "\n";
    }
  }

  void classAverage() const {
    if (students_.empty()) {
      std::cout << "No students recorded yet.\n";
      return;
    }

    double total = 0.0;
    for (const Student& student : students_) {
      total += student.average();
    }
    const double overall = total / static_cast<double>(students_.size());
    std::cout << std::fixed << std::setprecision(2)
              << "Class average: " << overall << "\n";
  }

  bool save(const std::string& path) const {
    std::ofstream output(path);
    if (!output) {
      return false;
    }

    for (const Student& student : students_) {
      output << student.name() << ';';
      for (std::size_t i = 0; i < student.grades().size(); ++i) {
        if (i > 0) {
          output << ',';
        }
        output << student.grades()[i];
      }
      output << '\n';
    }
    return true;
  }

  bool load(const std::string& path) {
    std::ifstream input(path);
    if (!input) {
      return false;
    }

    students_.clear();
    std::string line;
    while (std::getline(input, line)) {
      if (line.empty()) {
        continue;
      }

      const std::size_t separator = line.find(';');
      if (separator == std::string::npos) {
        continue;
      }

      const std::string name = line.substr(0, separator);
      std::vector<double> grades;
      std::stringstream gradeStream(line.substr(separator + 1));
      std::string token;
      while (std::getline(gradeStream, token, ',')) {
        if (token.empty()) {
          continue;
        }
        try {
          grades.push_back(std::stod(token));
        } catch (const std::exception&) {
          // Skip values that cannot be parsed.
        }
      }
      addStudent(name, grades);
    }
    return true;
  }

 private:
  std::vector<Student> students_;
};

namespace {

double readGrade() {
  while (true) {
    std::cout << "  Enter a grade (0-100), or -1 to stop: ";
    std::string line;
    if (!std::getline(std::cin, line)) {
      return -1.0;
    }
    try {
      const double grade = std::stod(line);
      if (grade == -1.0) {
        return -1.0;
      }
      if (grade < 0.0 || grade > 100.0) {
        std::cout << "  Grade must be between 0 and 100.\n";
        continue;
      }
      return grade;
    } catch (const std::exception&) {
      std::cout << "  That is not a valid number.\n";
    }
  }
}

void addStudentFlow(GradeManager& manager) {
  std::cout << "Student name: ";
  std::string name;
  std::getline(std::cin, name);

  if (name.empty()) {
    std::cout << "Name cannot be empty.\n";
    return;
  }

  std::vector<double> grades;
  while (true) {
    const double grade = readGrade();
    if (grade == -1.0) {
      break;
    }
    grades.push_back(grade);
  }

  manager.addStudent(name, grades);
  std::cout << "Added " << name << " with " << grades.size() << " grade(s).\n";
}

}  // namespace

int main() {
  GradeManager manager;
  const std::string dataFile = "students.txt";

  if (manager.load(dataFile)) {
    std::cout << "Loaded saved records from " << dataFile << ".\n";
  }

  const std::string menu =
      "\nStudent Grade Manager\n"
      "1) Add a student\n"
      "2) Show all students\n"
      "3) Show class average\n"
      "4) Save records\n"
      "5) Quit\n";

  while (true) {
    std::cout << menu;
    std::cout << "Choose an option: ";

    std::string choice;
    if (!std::getline(std::cin, choice)) {
      break;
    }

    if (choice == "1") {
      addStudentFlow(manager);
    } else if (choice == "2") {
      manager.printAll();
    } else if (choice == "3") {
      manager.classAverage();
    } else if (choice == "4") {
      if (manager.save(dataFile)) {
        std::cout << "Saved to " << dataFile << ".\n";
      } else {
        std::cout << "Could not write " << dataFile << ".\n";
      }
    } else if (choice == "5") {
      if (manager.save(dataFile)) {
        std::cout << "Saved to " << dataFile << ".\n";
      }
      std::cout << "Goodbye!\n";
      break;
    } else {
      std::cout << "Please choose a number between 1 and 5.\n";
    }

    if (std::cin.eof()) {
      break;
    }
  }

  return 0;
}
