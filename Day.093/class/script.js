function getGrade(s1, s2, s3) {
    const avg = (s1 + s2 + s3) / 3;
    const grade =
      avg >= 90 ? 'A' :
      avg >= 80 ? 'B' :
      avg >= 70 ? 'C' :
      avg >= 60 ? 'D' : 'F';
    switch (grade) {
      case 'A':
        return 'A';
      case 'B':
        return 'B';
      case 'C':
        return 'C';
      case 'D':
        return 'D';
      case 'F':
        return 'F';
    }
  }
  