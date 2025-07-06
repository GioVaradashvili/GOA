// Function to calculate average and grade
function calculateGrade(subject1, subject2, subject3) {
    // Calculate average score
    const average = (subject1 + subject2 + subject3) / 3;

    // Determine grade based on average score
    let grade;
    if (average > 90 && average <= 100) {
        grade = 'A';
    } else if (average > 70 && average <= 80) {
        grade = 'B';
    } else if (average > 50 && average <= 65) {
        grade = 'C';
    } else if (average > 25 && average <= 50) {
        grade = 'D';
    } else if (average <= 25) {
        grade = 'წადი ისწავლე და მერე მოდი';
    } else {
        grade = 'Invalid score';
    }

    // Output the average score and grade
    console.log(`Average Score: ${average.toFixed(2)}`);
    console.log(`Grade: ${grade}`);
}

// Example usage
const subject1 = parseFloat(prompt("Enter the score for subject 1:"));
const subject2 = parseFloat(prompt("Enter the score for subject 2:"));
const subject3 = parseFloat(prompt("Enter the score for subject 3:"));

calculateGrade(subject1, subject2, subject3);