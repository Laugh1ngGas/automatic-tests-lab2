export function transpose(matrix) {
  return matrix[0].map((_, colIndex) => 
    matrix.map(row => row[colIndex])
  );
}

export function add(m1, m2) {
  if (m1.length !== m2.length || m1[0].length !== m2[0].length) {
    throw new Error('Matrices must have the same dimensions for addition');
  }

  return m1.map((row, i) => 
    row.map((value, j) => value + m2[i][j])
  );
}

export function multiply(m1, m2) {
  const cols1 = m1[0].length;
  const rows2 = m2.length;

  if (cols1 !== rows2) {
    throw new Error('Column count of the first matrix must equal row count of the second');
  }

  const m2_transposed = transpose(m2);

  return m1.map(row1 => 
    m2_transposed.map(row2 =>
      row1.reduce((sum, value, k) => sum + (value * row2[k]), 0)
    )
  );
}