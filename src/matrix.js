export function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  
  const result = [];
  for (let j = 0; j < cols; j++) {
    result[j] = [];
  }
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}

export function add(m1, m2) {
  const rows1 = m1.length;
  const cols1 = m1[0].length;
  const rows2 = m2.length;
  const cols2 = m2[0].length;

  if (rows1 !== rows2 || cols1 !== cols2) {
    throw new Error('Matrices must have the same dimensions for addition');
  }

  const result = [];
  for (let i = 0; i < rows1; i++) {
    result[i] = [];
    for (let j = 0; j < cols1; j++) {
      result[i][j] = m1[i][j] + m2[i][j];
    }
  }
  return result;
}