export class Generator {
  private lowercase = 'abcdefghijklmnopqrstuvwxyz';
  private uppercase = this.lowercase.toUpperCase()
  private digits = '0123456789'
  private symbols = '~!@#$%^&*()=+[{]}\\;:\'"/?.>,<'
  private blockLength = 8
  private options!: Set<number>;

  constructor(hasLowercase: boolean, hasUppercase: boolean, hasDigits: boolean, hasSymbols: boolean) {
    this.options = new Set<number>()
    if (hasLowercase) {
      this.options.add(1)
    }
    if (hasUppercase) {
      this.options.add(2)
    }
    if (hasDigits) {
      this.options.add(3)
    }
    if (hasSymbols) {
      this.options.add(3)
    }
  }

  private random = (num: number): number => Math.floor(crypto.getRandomValues(new Uint32Array(1))[0] / 2 ** 32 * num) + 1;

  private generateRandomCharSet(): string {
    let charSet = ''

    while (charSet.length != this.blockLength) {
      const result: number = this.random(4)

      if (result === 1 && this.options.has(1)) {
        charSet += result
      } else if (result === 2 && this.options.has(2)) {
        charSet += result
      } else if (result === 3 && this.options.has(3)) {
        charSet += result
      } else if (result === 4 && this.options.has(4)) {
        charSet += result
      }
    }

    return charSet
  }

  private generateBlock(): string {
    let charSet!: string
    let block: string = ''
    let err = true

    while (err) {
      charSet = this.generateRandomCharSet()

      err = this.options.has(1) && !charSet.includes('1') ||
        this.options.has(2) && !charSet.includes('2') ||
        this.options.has(3) && !charSet.includes('3') ||
        this.options.has(4) && !charSet.includes('4')
    }

    for (let i = 0; i < this.blockLength; i++) {
      if (charSet[i] == '1') {
        block += this.lowercase[this.random(this.lowercase.length)]
      } else if (charSet[i] === '2') {
        block += this.uppercase[this.random(this.uppercase.length)]
      } else if (charSet[i] === '3') {
        block += this.digits[this.random(this.digits.length)]
      } else if (charSet[i] === '4') {
        block += this.symbols[this.random(this.symbols.length)]
      }
    }

    return block
  }

  public generatePassword(): string {
    let password = ''
    let block = ''

    for (let i = 0; i < 4; i++) {
      block = this.generateBlock()
      while (block.includes('undefined'))
        block = this.generateBlock()
      password += block
      password += i < 3 ? '-' : ''
    }

    return password
  }
}
