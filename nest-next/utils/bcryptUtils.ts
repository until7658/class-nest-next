import bcrypt from 'bcrypt';

// 고정된 솔트 값 생성
const fixedSalt = bcrypt.genSaltSync(10);

/**
 * 비밀번호를 고정된 솔트로 암호화하는 함수
 * @param password - 암호화할 비밀번호
 * @returns 암호화된 비밀번호
 */
export async function encryptPasswordWithFixedSalt(
  password: string,
): Promise<string> {
  try {
    const hashedPassword = await bcrypt.hash(password, fixedSalt);
    return hashedPassword;
  } catch (err) {
    console.error('비밀번호 암호화 중 오류 발생:', err);
    throw err;
  }
}

/**
 * 비밀번호와 해시된 비밀번호를 비교하는 함수
 * @param password - 입력된 비밀번호
 * @param hashedPassword - 저장된 해시된 비밀번호
 * @returns 비밀번호 일치 여부 (true 또는 false)
 */
export async function comparePassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  try {
    const match = await bcrypt.compare(password, hashedPassword);
    return match;
  } catch (err) {
    console.error('비밀번호 비교 중 오류 발생:', err);
    throw err;
  }
}
