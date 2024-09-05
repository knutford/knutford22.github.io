// Simulated database of students with their results
var students = [
    {
        username: "dorothy",
        password: "matti2023",
        name: "Dorothy Matti",
        indexNumber: "26102306",
        results: {
            year1: {
                semester1: {
                    courses: {
                        IntroductionToITEthicalAndLegalIssuesInIT: { grade: "A", creditHours: 3, score: 80 },
                        IntroductionToLiterature: { grade: "A", creditHours: 3, score: 83 },
                        CriticalAndTheologicalThinkingSkills: { grade: "B", creditHours: 3, score: 75 },
                        IntroductionToProblemSolvingAndProgramming: { grade: "B", creditHours: 3, score: 71 },
                        Calculus1: { grade: "B", creditHours: 3, score: 70 },
                    }
                },
                semester2: {
                    courses: {
                        IntroductionToProbabiltyAndStatistics: { grade: "B+", creditHours: 3, score: 77 },
                        WebTechnologies: { grade: "A", creditHours: 3, score: 82 },
                        BasicAcademicWritingSkills: { grade: "B", creditHours: 3, score: 69 },
                        UnderstandingHumanSocieties: { grade: "A", creditHours: 3, score: 88 },
                        EndUserComputingBusinessComputing: { grade: "B-", creditHours: 3, score: 65 }
                    }
                }
            },
            year2: {
                semester1: {
                    courses: {
                        PrinciplesOfManagement: { grade: "A", creditHours: 3, score: 88 },
                        AdvanceAcademicWritingSkills: { grade: "B", creditHours: 3, score: 70 },
                        ComputerArchitectureAndLowLevelProgramming: { grade: "B+", creditHours: 3, score: 76 },
                        AfricaAndWorldDevelopment: { grade: "A", creditHours: 3, score: 82 },
                        DiscreteMathematics: { grade: "B", creditHours: 3, score: 72 },
                    }
                },
                semester2: {
                    courses: {
                        WirelessCommunicationTechnologies: { grade: "A", creditHours: 3, score: 81 },
                        ITResourcePlanningSystemAnalysisAndDesign: { grade: "B", creditHours: 3, score: 74 },
                        DatabaseFundamentalsAndManagement: { grade: "A", creditHours: 3, score: 86 },
                        MultimediaAndWebDesign: { grade: "B+", creditHours: 3, score: 79 },
                        DataCommunicationAndNetworking1: { grade: "A", creditHours: 3, score: 82 }
                    }
                }
            },
            year3: {
                semester1: {
                    courses: {
                        SoftwareEngineering: { grade: "A", creditHours: 3, score: 84 },
                        AdvancedDatabase: { grade: "B+", creditHours: 3, score: 78 },
                        OperatingSystems: { grade: "B-", creditHours: 3, score: 66 },
                        InformationStorageAndManagementTechnologies: { grade: "A", creditHours: 3, score: 80 },
                        HumanComputerInteraction: { grade: "B", creditHours: 3, score: 71 }
                    }
                },
                semester2: {
                    courses: {
                        ITProjectManagement: { grade: "B", creditHours: 3, score: 73 },
                        ITSecurityAndRiskManagement: { grade: "A", creditHours: 3, score: 85 },
                        AdvancedWebTechnologies: { grade: "A", creditHours: 3, score: 87 },
                        MobileApplicationDevelopment: { grade: "B", creditHours: 3, score: 69 },
                        ArtificialIntelligenceAndMachineLearning: { grade: "A", creditHours: 3, score: 82 }
                    }
                }
            },
            year4: {
                semester1: {
                    courses: {
                        SoftwareEngineering: { grade: "A", creditHours: 3, score: 84 },
                        AdvancedDatabase: { grade: "B+", creditHours: 3, score: 78 },
                        OperatingSystems: { grade: "B-", creditHours: 3, score: 66 },
                        InformationStorageAndManagementTechnologies: { grade: "A", creditHours: 3, score: 80 },
                        HumanComputerInteraction: { grade: "B", creditHours: 3, score: 71 }
                    }
                },
                semester2: {
                    courses: {
                        ITProjectManagement: { grade: "B", creditHours: 3, score: 73 },
                        ITSecurityAndRiskManagement: { grade: "A", creditHours: 3, score: 85 },
                        AdvancedWebTechnologies: { grade: "A", creditHours: 3, score: 87 },
                        MobileApplicationDevelopment: { grade: "B", creditHours: 3, score: 69 },
                        ArtificialIntelligenceAndMachineLearning: { grade: "A", creditHours: 3, score: 82 }
                    }
                }
            }
        }
    },

    {
        username: "yeboah",
        password: "doe2023",
        name: "Yeboah Doe",
        indexNumber: "26102306",
        results: {
            year1: {
                semester1: {
                    courses: {
                        IntroductionToITEthicalAndLegalIssuesInIT: { grade: "A", creditHours: 3, score: 80 },
                        IntroductionToLiterature: { grade: "A", creditHours: 3, score: 83 },
                        CriticalAndTheologicalThinkingSkills: { grade: "B", creditHours: 3, score: 75 },
                        IntroductionToProblemSolvingAndProgramming: { grade: "B", creditHours: 3, score: 71 },
                        Calculus1: { grade: "B", creditHours: 3, score: 70 },
                    }
                },
                semester2: {
                    courses: {
                        IntroductionToProbabiltyAndStatistics: { grade: "B+", creditHours: 3, score: 77 },
                        WebTechnologies: { grade: "A", creditHours: 3, score: 82 },
                        BasicAcademicWritingSkills: { grade: "B", creditHours: 3, score: 69 },
                        UnderstandingHumanSocieties: { grade: "A", creditHours: 3, score: 88 },
                        EndUserComputingBusinessComputing: { grade: "B-", creditHours: 3, score: 65 }
                    }
                }
            },
            year2: {
                semester1: {
                    courses: {
                        PrinciplesOfManagement: { grade: "A", creditHours: 3, score: 88 },
                        AdvanceAcademicWritingSkills: { grade: "B", creditHours: 3, score: 70 },
                        ComputerArchitectureAndLowLevelProgramming: { grade: "B+", creditHours: 3, score: 76 },
                        AfricaAndWorldDevelopment: { grade: "A", creditHours: 3, score: 82 },
                        DiscreteMathematics: { grade: "B", creditHours: 3, score: 72 },
                    }
                },
                semester2: {
                    courses: {
                        WirelessCommunicationTechnologies: { grade: "A", creditHours: 3, score: 81 },
                        ITResourcePlanningSystemAnalysisAndDesign: { grade: "B", creditHours: 3, score: 74 },
                        DatabaseFundamentalsAndManagement: { grade: "A", creditHours: 3, score: 86 },
                        MultimediaAndWebDesign: { grade: "B+", creditHours: 3, score: 79 },
                        DataCommunicationAndNetworking1: { grade: "A", creditHours: 3, score: 82 }
                    }
                }
            },
            year3: {
                semester1: {
                    courses: {
                        SoftwareEngineering: { grade: "A", creditHours: 3, score: 84 },
                        AdvancedDatabase: { grade: "B+", creditHours: 3, score: 78 },
                        OperatingSystems: { grade: "B-", creditHours: 3, score: 66 },
                        InformationStorageAndManagementTechnologies: { grade: "A", creditHours: 3, score: 80 },
                        HumanComputerInteraction: { grade: "B", creditHours: 3, score: 71 }
                    }
                },
                semester2: {
                    courses: {
                        ITProjectManagement: { grade: "B", creditHours: 3, score: 73 },
                        ITSecurityAndRiskManagement: { grade: "A", creditHours: 3, score: 85 },
                        AdvancedWebTechnologies: { grade: "A", creditHours: 3, score: 87 },
                        MobileApplicationDevelopment: { grade: "B", creditHours: 3, score: 69 },
                        ArtificialIntelligenceAndMachineLearning: { grade: "A", creditHours: 3, score: 82 }
                    }
                }
            },
            year4: {
                semester1: {
                    courses: {
                        SoftwareEngineering: { grade: "A", creditHours: 3, score: 84 },
                        AdvancedDatabase: { grade: "B+", creditHours: 3, score: 78 },
                        OperatingSystems: { grade: "B-", creditHours: 3, score: 66 },
                        InformationStorageAndManagementTechnologies: { grade: "A", creditHours: 3, score: 80 },
                        HumanComputerInteraction: { grade: "B", creditHours: 3, score: 71 }
                    }
                },
                semester2: {
                    courses: {
                        ITProjectManagement: { grade: "B", creditHours: 3, score: 73 },
                        ITSecurityAndRiskManagement: { grade: "A", creditHours: 3, score: 85 },
                        AdvancedWebTechnologies: { grade: "A", creditHours: 3, score: 87 },
                        MobileApplicationDevelopment: { grade: "B", creditHours: 3, score: 69 },
                        ArtificialIntelligenceAndMachineLearning: { grade: "A", creditHours: 3, score: 82 }
                    }
                }
            }
        }
    }
    // Additional students can be added here
];

// Function to handle student login
function loginAsStudent() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    var student = students.find(s => s.username === username && s.password === password);
    if (student) {
        document.getElementById('welcomeMessage').style.display = 'none';
        document.getElementById('roleSelection').style.display = 'none';
        document.getElementById('studentLoginForm').style.display = 'none';
        document.getElementById('semesterYearSelection').style.display = 'block';
        document.body.classList.add('no-background'); // Remove background image
    } else {
        alert('Invalid username or password.');
    }
    return false; // Prevent form submission
}

// Function to handle instructor login
function loginAsInstructor() {
    var username = document.getElementById('instructorUsername').value;
    var password = document.getElementById('instructorPassword').value;

    // Dummy check for instructor credentials
    if (username === 'instructor' && password === 'password') {
        document.getElementById('welcomeMessage').style.display = 'none';
        document.getElementById('roleSelection').style.display = 'none';
        document.getElementById('instructorLoginForm').style.display = 'none';
        document.getElementById('instructorDashboard').style.display = 'block';
        document.body.classList.add('no-background'); // Remove background image
    } else {
        alert('Invalid instructor username or password.');
    }
    return false; // Prevent form submission
}

// Function to show student login form
function showStudentLoginForm() {
    document.getElementById('studentLoginForm').style.display = 'block';
    document.getElementById('instructorLoginForm').style.display = 'none';
}

// Function to show instructor login form
function showInstructorLoginForm() {
    document.getElementById('instructorLoginForm').style.display = 'block';
    document.getElementById('studentLoginForm').style.display = 'none';
}

// Function to calculate GPA from grade
function calculateGPA(grade) {
    switch (grade) {
        case 'A': return 4.0;
        case 'B+': return 3.5;
        case 'B': return 3.0;
        case 'C+': return 2.5;
        case 'C': return 2.0;
        case 'D': return 1.0;
        case 'E': return 0.0;
        default: return 0.0;
    }
}

// Function to update or add results
function updateResults() {
    var username = document.getElementById('studentUsername').value;
    var semester = document.getElementById('updateSemesterSelect').value;
    var year = document.getElementById('updateYearSelect').value;
    var courseName = document.getElementById('courseName').value;
    var grade = document.getElementById('courseGrade').value;
    var credits = parseInt(document.getElementById('courseCredits').value);
    var score = parseInt(document.getElementById('courseScore').value);

    var student = students.find(s => s.username === username);
    if (student) {
        var courses = student.results['year' + year][semester].courses;
        if (courses[courseName]) {
            // Update existing course
            courses[courseName] = { grade: grade, creditHours: credits, score: score };
            alert('Course updated successfully!');
        } else {
            // Add new course
            courses[courseName] = { grade: grade, creditHours: credits, score: score };
            alert('Course added successfully!');
        }
        
        // Reset to main interface
        document.getElementById('instructorDashboard').style.display = 'none';
        document.getElementById('roleSelection').style.display = 'block';
        document.body.classList.remove('no-background'); // Restore background image
        
    } else {
        alert('Student not found.');
    }
    return false; // Prevent form submission
}


// Function to show results
function showResults() {
    // Show loading indicator
    document.getElementById('loading').style.display = 'block';

    setTimeout(function() {
        var username = document.getElementById('username').value;
        var semester = document.getElementById('semesterSelect').value;
        var year = document.getElementById('yearSelect').value;

        var student = students.find(s => s.username === username);
        if (!student) {
            alert('Student not found.');
            // Hide loading indicator
            document.getElementById('loading').style.display = 'none';
            return false; // Prevent form submission
        }

        var results = student.results['year' + year][semester].courses;

        var totalCredits = 0;
        var totalGradePoints = 0;

        var resultHtml = '<h3>Results</h3><table><tr><th>Course Name</th><th>Credits</th><th>Score</th><th>Grade</th><th>GP</th></tr>';
        for (var course in results) {
            var courseData = results[course];
            var gpa = calculateGPA(courseData.grade);
            var gradePoints = gpa * courseData.creditHours;
            totalCredits += courseData.creditHours;
            totalGradePoints += gradePoints;

            resultHtml += `<tr><td>${course}</td><td>${courseData.creditHours}</td><td>${courseData.score}</td><td>${courseData.grade}</td><td>${Math.round(gradePoints)}</td></tr>`;
        }
        resultHtml += '</table>';

        // Calculate weighted average GPA
        var weightedAverage = totalGradePoints / totalCredits;

        resultHtml += '<h3>Course Trailing</h3>';
        resultHtml += '<table>';
        resultHtml += '<tr><th>Credits Registered</th><th>Credits Earned</th><th>Credit Calc</th><th>Grade Point</th><th>Weighted Average</th></tr>';
        resultHtml += `<tr><td>${totalCredits}</td><td>${totalCredits}</td><td>${totalCredits}</td><td>${Math.round(totalGradePoints)}</td><td>${weightedAverage.toFixed(2)}</td></tr>`;
        resultHtml += '</table>';

        document.getElementById('result').innerHTML = resultHtml;
        document.getElementById('result').style.display = 'block';

        // Hide loading indicator
        document.getElementById('loading').style.display = 'none';
    }, 500); // Simulated delay for loading

    return false; // Prevent form submission
}
