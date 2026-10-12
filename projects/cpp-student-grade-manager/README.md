# Student Grade Manager (C++)

A console application written in C++ for an academic programming
assignment. It stores students and their grades, calculates each
student's average and letter grade, and saves the records to a text
file.

## Features

- Add a student with any number of grades.
- Show every student with their average and letter grade.
- Show the class average.
- Save and load records from `students.txt`.
- Validate that grades are numeric and between 0 and 100.

## Concepts demonstrated

- Classes with encapsulation (`Student`, `GradeManager`).
- Standard library containers and algorithms (`std::vector`, `std::string`,
  `std::accumulate`).
- File input and output (`std::ifstream`, `std::ofstream`).
- Formatted console output with `<iomanip>`.

## Requirements

- A C++17 compiler such as `g++`, `clang++`, or MSVC.

## Build and run

```bash
g++ -std=c++17 -Wall -Wextra main.cpp -o grade_manager
./grade_manager
```

On Windows, the executable is produced as `grade_manager.exe`.

## Notes

Records are stored in `students.txt` in the working directory. The file
format is one student per line: `name;grade1,grade2,...`.
