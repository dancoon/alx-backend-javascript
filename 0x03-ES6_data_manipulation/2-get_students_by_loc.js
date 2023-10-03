export default function getStudentsByLocation(students, city) {
  if (students instanceof Array) {
    return students.filter((obj) => {
      if (obj.location === city) return true;
      false;
    });
  }
  return [];
}
