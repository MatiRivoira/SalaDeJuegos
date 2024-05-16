import { Injectable } from '@angular/core';
import { Pregunta } from '../interfaces/pregunta';

@Injectable({
    providedIn: 'root',
})
export class PreguntadosService {
    constructor() {}

    getPreguntas(): Pregunta[] {
        return this.preguntas;
    }

    private preguntas : Pregunta[] = 
    [
        {
            categoria: 'juegos',
            pregunta:
            "¿Cuál es el personaje principal de la saga de videojuegos 'The Legend of Zelda'?",
            opciones: ['Link', 'Mario', 'Sonic', 'Donkey Kong'],
            respuesta_correcta: 'Link',
        },
        {
            categoria: 'juegos',
            pregunta:
            "¿Cuál de los siguientes juegos pertenece a la franquicia 'Final Fantasy'?",
            opciones: [
            'Persona 5',
            'The Witcher 3',
            'Final Fantasy VII',
            'Red Dead Redemption 2',
            ],
            respuesta_correcta: 'Final Fantasy VII',
        },
        {
            categoria: 'series',
            pregunta:
            '¿En qué serie de televisión aparece el personaje Walter White?',
            opciones: [
            'Breaking Bad',
            'Stranger Things',
            'Game of Thrones',
            'Friends',
            ],
            respuesta_correcta: 'Breaking Bad',
        },
        {
            categoria: 'series',
            pregunta: "¿Quién interpreta a Jon Snow en la serie 'Game of Thrones'?",
            opciones: [
            'Kit Harington',
            'Peter Dinklage',
            'Emilia Clarke',
            'Sophie Turner',
            ],
            respuesta_correcta: 'Kit Harington',
        },
        {
            categoria: 'deportes',
            pregunta: '¿Cuál es el deporte más popular en Estados Unidos?',
            opciones: ['Fútbol', 'Baloncesto', 'Béisbol', 'Fútbol Americano'],
            respuesta_correcta: 'Fútbol Americano',
        },
        {
            categoria: 'deportes',
            pregunta: '¿En qué deporte se usa un guante de béisbol?',
            opciones: ['Tenis', 'Béisbol', 'Golf', 'Baloncesto'],
            respuesta_correcta: 'Béisbol',
        },
        {
            categoria: 'programacion',
            pregunta: "¿Qué significa 'HTML'?",
            opciones: [
            'Hyper Text Markup Language',
            'Hypertext Transfer Protocol',
            'Hyperlink and Text Markup Language',
            'Home Tool Markup Language',
            ],
            respuesta_correcta: 'Hyper Text Markup Language',
        },
        {
            categoria: 'programacion',
            pregunta:
            '¿Cuál de los siguientes lenguajes de programación es orientado a objetos?',
            opciones: ['C', 'Java', 'Python', 'HTML'],
            respuesta_correcta: 'Java',
        },
        {
            categoria: 'juegos',
            pregunta: "¿En qué año se lanzó el juego 'Super Mario Bros.'?",
            opciones: ['1985', '1990', '1995', '2000'],
            respuesta_correcta: '1985',
        },
        {
            categoria: 'juegos',
            pregunta: "¿Quién es el creador del juego 'Minecraft'?",
            opciones: [
            'Markus Persson',
            'Hideo Kojima',
            'Shigeru Miyamoto',
            'Todd Howard',
            ],
            respuesta_correcta: 'Markus Persson',
        },
        {
            categoria: 'series',
            pregunta:
            '¿En qué serie de televisión aparece el personaje Michael Scott?',
            opciones: [
            'The Office',
            'Parks and Recreation',
            'Modern Family',
            'Brooklyn Nine-Nine',
            ],
            respuesta_correcta: 'The Office',
        },
        {
            categoria: 'series',
            pregunta: "¿Cuál es el nombre del protagonista de la serie 'Sherlock'?",
            opciones: [
            'John Watson',
            'Sherlock Holmes',
            'James Moriarty',
            'Mycroft Holmes',
            ],
            respuesta_correcta: 'Sherlock Holmes',
        },
        {
            categoria: 'deportes',
            pregunta: "¿En qué deporte se utiliza un palo largo llamado 'maza'?",
            opciones: ['Golf', 'Béisbol', 'Cricket', 'Croquet'],
            respuesta_correcta: 'Cricket',
        },
        {
            categoria: 'deportes',
            pregunta: '¿En qué deporte se disputa la Copa Stanley?',
            opciones: ['Fútbol', 'Hockey sobre hielo', 'Baloncesto', 'Béisbol'],
            respuesta_correcta: 'Hockey sobre hielo',
        },
        {
            categoria: 'programacion',
            pregunta:
            '¿Cuál de los siguientes lenguajes de programación es interpretado y no compilado?',
            opciones: ['Java', 'C++', 'Python', 'C#'],
            respuesta_correcta: 'Python',
        },
        {
            categoria: 'programacion',
            pregunta:
            '¿Cuál es el estándar de hojas de estilo en cascada utilizado para diseñar páginas web?',
            opciones: ['CSS', 'HTML', 'JavaScript', 'XML'],
            respuesta_correcta: 'CSS',
        },
        {
            categoria: 'juegos',
            pregunta: "¿En qué año se lanzó el juego 'The Witcher 3: Wild Hunt'?",
            opciones: ['2014', '2015', '2016', '2017'],
            respuesta_correcta: '2015',
        },
        {
            categoria: 'juegos',
            pregunta: '¿Cuál es el nombre del hermano de Mario?',
            opciones: ['Luigi', 'Wario', 'Yoshi', 'Toad'],
            respuesta_correcta: 'Luigi',
        },
        {
            categoria: 'series',
            pregunta:
            '¿Cuál de las siguientes series fue creada por David Fincher?',
            opciones: [
            'Breaking Bad',
            'House of Cards',
            'Stranger Things',
            'The Crown',
            ],
            respuesta_correcta: 'House of Cards',
        },
        {
            categoria: 'series',
            pregunta: "¿En qué ciudad se desarrolla la serie 'Friends'?",
            opciones: ['Nueva York', 'Los Ángeles', 'Chicago', 'Seattle'],
            respuesta_correcta: 'Nueva York',
        },
        {
            categoria: 'deportes',
            pregunta: '¿Cuál es el deporte más popular en la India?',
            opciones: ['Críquet', 'Fútbol', 'Hockey sobre hierba', 'Bádminton'],
            respuesta_correcta: 'Críquet',
        },
        {
            categoria: 'deportes',
            pregunta: '¿En qué país se originó el deporte del judo?',
            opciones: ['Japón', 'Corea del Sur', 'China', 'Vietnam'],
            respuesta_correcta: 'Japón',
        },
        {
            categoria: 'programacion',
            pregunta: '¿Quién es conocido como el padre de la programación?',
            opciones: [
            'Alan Turing',
            'Bill Gates',
            'Tim Berners-Lee',
            'Ada Lovelace',
            ],
            respuesta_correcta: 'Alan Turing',
        },
        {
            categoria: 'programacion',
            pregunta: "¿Qué significa 'SQL' en el contexto de las bases de datos?",
            opciones: [
            'Structured Query Language',
            'Sequential Query Language',
            'Standardized Query Language',
            'Simplified Query Language',
            ],
            respuesta_correcta: 'Structured Query Language',
        },
    ]
}
