import { Component } from '@angular/core';

@Component({
  selector: 'app-palindrome',
  templateUrl: './palindrome.component.html',
  styleUrls: ['./palindrome.component.css']
})
export class PalindromeComponent {
  inputString: string = '';
  result: string | null = null;

  isPalindrome(str: string): boolean {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const reversedStr = cleanedStr.split('').reverse().join('');
    return cleanedStr === reversedStr;
  }

  checkPalindrome() {
    if (this.inputString) {
      this.result = this.isPalindrome(this.inputString)
        ? `${this.inputString} is a palindrome`
        : `${this.inputString} is not a palindrome`;
    } else {
      this.result = null;
    }
  }
}