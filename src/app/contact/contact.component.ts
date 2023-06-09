import { Component } from '@angular/core';
import { SocialContact } from '../socialContact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactList : SocialContact[] = [
    { id : 1,
      img : "../../assets/iconmonstr-github.png",
      title : "github",
      link : "https://github.com/DhruvinShiroya"
    },
    { id : 2,
      img : "../../assets/iconmonstr-linkedin.png",
      title : "linkedin",
      link : "https://www.linkedin.com/in/dhruvin-shiroya"
    },
    { id : 3,
      img : "../../assets/iconmonstr-gmail.png",
      title : "gmail",
      link : "mailto:shiroyadhruvinm@gmail.com"
    },
    { id : 4,
      img : "../../assets/iconmonstr-discord.png",
      title : "discord",
      link : "https://discordapp.com/users/dand#1522"
    }];
}

