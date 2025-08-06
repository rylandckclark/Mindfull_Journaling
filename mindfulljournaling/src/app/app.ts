import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../components/header/header';
import { About } from '../components/about/about';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, About],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mindfulljournaling');
}
