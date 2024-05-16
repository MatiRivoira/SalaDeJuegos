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
            claveImagen: '', // Sin clave de búsqueda de imagen
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
            claveImagen: '', 
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
            claveImagen: '', 
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
            claveImagen: '', 
            respuesta_correcta: 'Kit Harington',
        },
        {
            categoria: 'deportes',
            pregunta: '¿Cuál es el deporte más popular en Estados Unidos?',
            opciones: ['Fútbol', 'Baloncesto', 'Béisbol', 'Fútbol Americano'],        
            claveImagen: '', 
            respuesta_correcta: 'Fútbol Americano',
        },
        {
            categoria: 'deportes',
            pregunta: '¿En qué deporte se usa un guante de béisbol?',
            opciones: ['Tenis', 'Béisbol', 'Golf', 'Baloncesto'],        
            claveImagen: '', 
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
            claveImagen: '', 
            respuesta_correcta: 'Hyper Text Markup Language',
        },
        {
            categoria: 'programacion',
            pregunta:
            '¿Cuál de los siguientes lenguajes de programación es orientado a objetos?',
            opciones: ['C', 'Java', 'Python', 'HTML'],        
            claveImagen: '', 
            respuesta_correcta: 'Java',
        },
        {
            categoria: 'juegos',
            pregunta: "¿En qué año se lanzó el juego 'Super Mario Bros.'?",
            opciones: ['1985', '1990', '1995', '2000'],        
            claveImagen: '', 
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
            claveImagen: '', 
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
            claveImagen: '', 
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
            claveImagen: '', 
            respuesta_correcta: 'Sherlock Holmes',
        },
        {
            categoria: 'deportes',
            pregunta: "¿En qué deporte se utiliza un palo largo llamado 'maza'?",
            opciones: ['Golf', 'Béisbol', 'Cricket', 'Croquet'],        
            claveImagen: '', 
            respuesta_correcta: 'Cricket',
        },
        {
            categoria: 'deportes',
            pregunta: '¿En qué deporte se disputa la Copa Stanley?',
            opciones: ['Fútbol', 'Hockey sobre hielo', 'Baloncesto', 'Béisbol'],        
            claveImagen: '', 
            respuesta_correcta: 'Hockey sobre hielo',
        },
        {
            categoria: 'programacion',
            pregunta:
            '¿Cuál de los siguientes lenguajes de programación es interpretado y no compilado?',
            opciones: ['Java', 'C++', 'Python', 'C#'],        
            claveImagen: '', 
            respuesta_correcta: 'Python',
        },
        {
            categoria: 'programacion',
            pregunta:
            '¿Cuál es el estándar de hojas de estilo en cascada utilizado para diseñar páginas web?',
            opciones: ['CSS', 'HTML', 'JavaScript', 'XML'],        
            claveImagen: '', 
            respuesta_correcta: 'CSS',
        },
        {
            categoria: 'juegos',
            pregunta: "¿En qué año se lanzó el juego 'The Witcher 3: Wild Hunt'?",
            opciones: ['2014', '2015', '2016', '2017'],        
            claveImagen: '', 
            respuesta_correcta: '2015',
        },
        {
            categoria: 'juegos',
            pregunta: '¿Cuál es el nombre del hermano de Mario?',
            opciones: ['Luigi', 'Wario', 'Yoshi', 'Toad'],        
            claveImagen: '', 
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
            claveImagen: '', 
            respuesta_correcta: 'House of Cards',
        },
        {
            categoria: 'series',
            pregunta: "¿En qué ciudad se desarrolla la serie 'Friends'?",
            opciones: ['Nueva York', 'Los Ángeles', 'Chicago', 'Seattle'],        
            claveImagen: '', 
            respuesta_correcta: 'Nueva York',
        },
        {
            categoria: 'deportes',
            pregunta: '¿Cuál es el deporte más popular en la India?',
            opciones: ['Críquet', 'Fútbol', 'Hockey sobre hierba', 'Bádminton'],        
            claveImagen: '', 
            respuesta_correcta: 'Críquet',
        },
        {
            categoria: 'deportes',
            pregunta: '¿En qué país se originó el deporte del judo?',
            opciones: ['Japón', 'Corea del Sur', 'China', 'Vietnam'],        
            claveImagen: '', 
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
            claveImagen: '', 
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
            claveImagen: '', 
            respuesta_correcta: 'Structured Query Language',
        },
        {
            categoria: 'juegos',
            pregunta: "¿Quién es este personaje icónico de los videojuegos?",
            opciones: ['Link', 'Mario', 'Sonic', 'Donkey Kong'],
            claveImagen: 'Super Mario', // Clave de búsqueda de imagen
            respuesta_correcta: 'Mario',
        },
        {
            categoria: 'series',
            pregunta: "¿Qué serie de televisión presenta a este personaje?",
            opciones: ['Breaking Bad', 'Stranger Things', 'Game of Thrones', 'Friends'],
            claveImagen: 'Walter White', // Clave de búsqueda de imagen
            respuesta_correcta: 'Breaking Bad',
        },
        {
            categoria: 'deportes',
            pregunta: "¿Qué deporte se juega con este implemento?",
            opciones: ['Fútbol', 'Baloncesto', 'Béisbol', 'Tenis'],
            claveImagen: 'Balón de fútbol', // Clave de búsqueda de imagen
            respuesta_correcta: 'Fútbol',
        },
        {
            categoria: 'programacion',
            pregunta: "¿Qué lenguaje de programación se utiliza principalmente para el desarrollo web?",
            opciones: ['Java', 'Python', 'HTML', 'C++'],
            claveImagen: 'HTML', // Clave de búsqueda de imagen
            respuesta_correcta: 'HTML',
        },
        {
            categoria: 'juegos',
            pregunta: "¿Quién es este personaje de la saga 'The Legend of Zelda'?",
            opciones: ['Link', 'Zelda', 'Ganondorf', 'Impa'],
            claveImagen: 'Link', // Clave de búsqueda de imagen
            respuesta_correcta: 'Link',
        },
        {
            categoria: 'juegos',
            pregunta: "¿Qué objeto icónico aparece en este juego de la saga 'Mario'?",
            opciones: ['Hongo verde', 'Estrella', 'Flor de fuego', 'Pluma de mapache'],
            claveImagen: 'Hongo verde Mario', // Clave de búsqueda de imagen
            respuesta_correcta: 'Hongo verde',
        },
        // Más preguntas de la categoría 'series'
        {
            categoria: 'series',
            pregunta: "¿Cuál es el título de esta serie de ciencia ficción?",
            opciones: ['Stranger Things', 'Black Mirror', 'Westworld', 'The Mandalorian'],
            claveImagen: 'Stranger Things', // Clave de búsqueda de imagen
            respuesta_correcta: 'Stranger Things',
        },
        {
            categoria: 'series',
            pregunta: "¿Qué serie de drama criminal presenta a este personaje principal?",
            opciones: ['Breaking Bad', 'The Sopranos', 'Narcos', 'Better Call Saul'],
            claveImagen: 'Walter White', // Clave de búsqueda de imagen
            respuesta_correcta: 'Breaking Bad',
        },
        // Más preguntas de la categoría 'deportes'
        {
            categoria: 'deportes',
            pregunta: "¿Qué deporte se juega en este estadio?",
            opciones: ['Fútbol', 'Baloncesto', 'Béisbol', 'Tenis'],
            claveImagen: 'Estadio de river plate', // Clave de búsqueda de imagen
            respuesta_correcta: 'Fútbol',
        },
        {
            categoria: 'deportes',
            pregunta: "¿Qué implemento se utiliza en este deporte?",
            opciones: ['Raqueta', 'Palo de golf', 'Balón', 'Disco'],
            claveImagen: 'Raqueta de tenis', // Clave de búsqueda de imagen
            respuesta_correcta: 'Raqueta',
        },
        // Más preguntas de la categoría 'programacion'
        {
            categoria: 'programacion',
            pregunta: "¿Qué lenguaje de programación se representa en este logo?",
            opciones: ['Java', 'Python', 'JavaScript', 'C++'],
            claveImagen: 'Logo de Python', // Clave de búsqueda de imagen
            respuesta_correcta: 'Python',
        },
        {
            categoria: 'programacion',
            pregunta: "¿Qué tecnología web se muestra en esta imagen?",
            opciones: ['CSS', 'HTML', 'JavaScript', 'PHP'],
            claveImagen: 'CSS', // Clave de búsqueda de imagen
            respuesta_correcta: 'CSS',
        },  {
            categoria: 'juegos',
            pregunta: "¿Cuál es el nombre de este personaje del juego 'Pokémon'?",
            opciones: ['Pikachu', 'Charmander', 'Squirtle', 'Bulbasaur'],
            claveImagen: 'Pikachu', // Clave de búsqueda de imagen
            respuesta_correcta: 'Pikachu',
        },
        {
            categoria: 'juegos',
            pregunta: "¿Qué objeto se necesita para romper bloques en 'Minecraft'?",
            opciones: ['Pico', 'Pala', 'Hacha', 'Azada'],
            claveImagen: 'Pico Minecraft', // Clave de búsqueda de imagen
            respuesta_correcta: 'Pico',
        },
        // Más preguntas de la categoría 'series'
        {
            categoria: 'series',
            pregunta: "¿Qué serie de comedia animada presenta a este personaje amarillo?",
            opciones: ['Los Simpson', 'Padre de familia', 'Rick y Morty', 'South Park'],
            claveImagen: 'Homero Simpson', // Clave de búsqueda de imagen
            respuesta_correcta: 'Los Simpson',
        },
        {
            categoria: 'series',
            pregunta: "¿Cuál es el nombre de esta serie de drama y fantasía?",
            opciones: ['Juego de Tronos', 'The Witcher', 'The Crown', 'Outlander'],
            claveImagen: 'Juego de Tronos', // Clave de búsqueda de imagen
            respuesta_correcta: 'Juego de Tronos',
        },
        // Más preguntas de la categoría 'deportes'
        {
            categoria: 'deportes',
            pregunta: "¿Qué deporte se practica en este recinto con una cancha de hielo?",
            opciones: ['Patinaje artístico', 'Hockey sobre hielo', 'Polo', 'Patinaje de velocidad'],
            claveImagen: 'Hockey sobre hielo', // Clave de búsqueda de imagen
            respuesta_correcta: 'Hockey sobre hielo',
        },
        {
            categoria: 'deportes',
            pregunta: "¿Qué deporte es popularmente conocido como 'El rey de los deportes'?",
            opciones: ['Fútbol', 'Baloncesto', 'Béisbol', 'Tenis'],
            claveImagen: 'Béisbol', // Clave de búsqueda de imagen
            respuesta_correcta: 'Béisbol',
        },
        // Más preguntas de la categoría 'programacion'
        {
            categoria: 'programacion',
            pregunta: "¿Cuál es el nombre de este lenguaje de programación de Google?",
            opciones: ['Go', 'Ruby', 'Swift', 'Rust'],
            claveImagen: 'Go lenguaje', // Clave de búsqueda de imagen
            respuesta_correcta: 'Go',
        },
        {
            categoria: 'programacion',
            pregunta: "¿Qué plataforma de desarrollo se muestra en esta imagen?",
            opciones: ['.NET', 'Node.js', 'Django', 'Ruby on Rails'],
            claveImagen: 'Node.js', // Clave de búsqueda de imagen
            respuesta_correcta: 'Node.js',
        },
        {
            categoria: 'juegos',
            pregunta: "¿Cómo se llama este personaje principal del juego 'The Witcher'?",
            opciones: ['Geralt de Rivia', 'Ezio Auditore', 'Joel Miller', 'Master Chief'],
            claveImagen: 'Geralt de Rivia', // Clave de búsqueda de imagen
            respuesta_correcta: 'Geralt de Rivia',
        },
        {
            categoria: 'juegos',
            pregunta: "¿Qué personaje es conocido por usar este arma en 'League of Legends'?",
            opciones: ['Ashe', 'Darius', 'Ezreal', 'Jinx'],
            claveImagen: 'Arco de Ashe', // Clave de búsqueda de imagen
            respuesta_correcta: 'Ashe',
        },
        // Preguntas adicionales de la categoría 'series'
        {
            categoria: 'series',
            pregunta: "¿Cuál es el nombre de esta serie que sigue las vidas de los supervivientes de un apocalipsis zombie?",
            opciones: ['The Walking Dead', 'Z Nation', 'Fear the Walking Dead', 'iZombie'],
            claveImagen: 'The Walking Dead', // Clave de búsqueda de imagen
            respuesta_correcta: 'The Walking Dead',
        },
        {
            categoria: 'series',
            pregunta: "¿En qué serie aparece este famoso detective británico creado por Arthur Conan Doyle?",
            opciones: ['Sherlock', 'Elementary', 'Mentes criminales', 'Luther'],
            claveImagen: 'Sherlock Holmes', // Clave de búsqueda de imagen
            respuesta_correcta: 'Sherlock',
        },
        // Preguntas adicionales de la categoría 'deportes'
        {
            categoria: 'deportes',
            pregunta: "¿Qué deporte se muestra en esta imagen que involucra una tabla y una vela?",
            opciones: ['Windsurf', 'Surf', 'Kitesurf', 'Remo'],
            claveImagen: 'Windsurf', // Clave de búsqueda de imagen
            respuesta_correcta: 'Windsurf',
        },
        {
            categoria: 'deportes',
            pregunta: "¿Qué deporte se juega en este estadio, conocido como 'La Bombonera'?",
            opciones: ['Fútbol', 'Rugby', 'Béisbol', 'Hockey sobre césped'],
            claveImagen: 'La Bombonera', // Clave de búsqueda de imagen
            respuesta_correcta: 'Fútbol',
        },
        // Preguntas adicionales de la categoría 'programacion'
        {
            categoria: 'programacion',
            pregunta: "¿Cuál es el nombre de este famoso lenguaje de programación utilizado para desarrollo web?",
            opciones: ['JavaScript', 'Java', 'Python', 'C++'],
            claveImagen: 'JavaScript', // Clave de búsqueda de imagen
            respuesta_correcta: 'JavaScript',
        },
        {
            categoria: 'programacion',
            pregunta: "¿Qué herramienta de control de versiones se muestra en esta imagen?",
            opciones: ['Git', 'SVN', 'Mercurial', 'Perforce'],
            claveImagen: 'Git', // Clave de búsqueda de imagen
            respuesta_correcta: 'Git',
        },
        {
            categoria: 'series',
            pregunta: "¿Qué serie se desarrolla en el universo de 'Star Wars' y sigue las aventuras de un mandaloriano solitario en los confines de la galaxia?",
            opciones: ['The Mandalorian', 'Star Wars: The Clone Wars', 'Star Wars Rebels', 'Star Wars: Resistance'],
            claveImagen: 'The Mandalorian', // Clave de búsqueda de imagen
            respuesta_correcta: 'The Mandalorian',
        },
        {
            categoria: 'series',
            pregunta: "¿En qué serie aparece este personaje conocido como 'El Conserje'?",
            opciones: ['Scrubs', 'House', 'Cómo conocí a vuestra madre', 'Friends'],
            claveImagen: 'El Conserje Scrubs', // Clave de búsqueda de imagen
            respuesta_correcta: 'Scrubs',
        },
        // Preguntas adicionales de la categoría 'deportes'
        {
            categoria: 'deportes',
            pregunta: "¿Qué deporte se muestra en esta imagen que se juega con una raqueta y una pelota amarilla?",
            opciones: ['Tenis', 'Pádel', 'Bádminton', 'Squash'],
            claveImagen: 'Tenis', // Clave de búsqueda de imagen
            respuesta_correcta: 'Tenis',
        },
        {
            categoria: 'deportes',
            pregunta: "¿En qué deporte se usa esta peculiar pelota de color rosa?",
            opciones: ['Rugby', 'Waterpolo', 'Balonmano', 'Netball'],
            claveImagen: 'Balonmano', // Clave de búsqueda de imagen
            respuesta_correcta: 'Balonmano',
        },
        // Preguntas adicionales de la categoría 'programacion'
        {
            categoria: 'programacion',
            pregunta: "¿Cuál es el nombre de este lenguaje de programación creado por Microsoft y ampliamente utilizado en el desarrollo de aplicaciones empresariales?",
            opciones: ['C#', 'Ruby', 'Swift', 'Kotlin'],
            claveImagen: 'C#', // Clave de búsqueda de imagen
            respuesta_correcta: 'C#',
        },
        {
            categoria: 'programacion',
            pregunta: "¿Qué tecnología de bases de datos se muestra en esta imagen que utiliza documentos JSON para almacenar datos?",
            opciones: ['MongoDB', 'MySQL', 'PostgreSQL', 'SQLite'],
            claveImagen: 'MongoDB', // Clave de búsqueda de imagen
            respuesta_correcta: 'MongoDB',
        },
        {
            categoria: 'juegos',
            pregunta: "¿Cuál es el nombre de este personaje del juego 'League of Legends'?",
            opciones: ['Ahri', 'Yasuo', 'Darius', 'Ashe'],
            claveImagen: 'League of Legends', // Clave de búsqueda de imagen
            respuesta_correcta: 'Ahri',
        },
        {
            categoria: 'juegos',
            pregunta: "¿En qué juego de disparos en primera persona se desarrolla esta imagen?",
            opciones: ['Call of Duty', 'Battlefield', 'Counter-Strike', 'Overwatch'],
            claveImagen: 'Counter-Strike', // Clave de búsqueda de imagen
            respuesta_correcta: 'Counter-Strike',
        },
        // Preguntas adicionales de la categoría 'series'
        {
            categoria: 'series',
            pregunta: "¿Cuál es el título de esta popular serie de ciencia ficción que trata sobre un grupo de supervivientes después de un apocalipsis zombie?",
            opciones: ['The Walking Dead', 'Fear the Walking Dead', 'Z Nation', 'iZombie'],
            claveImagen: 'The Walking Dead', // Clave de búsqueda de imagen
            respuesta_correcta: 'The Walking Dead',
        },
        {
            categoria: 'series',
            pregunta: "¿En qué serie de televisión se presenta este personaje conocido como 'El Carnicero de Bay Harbor'?",
            opciones: ['Dexter', 'Breaking Bad', 'True Detective', 'Fargo'],
            claveImagen: 'Dexter', // Clave de búsqueda de imagen
            respuesta_correcta: 'Dexter',
        },
        // Preguntas adicionales de la categoría 'deportes'
        {
            categoria: 'deportes',
            pregunta: "¿En qué deporte se muestra esta pelota que se juega en una cancha rectangular con una red en el medio?",
            opciones: ['Voleibol', 'Tenis', 'Bádminton', 'Balonmano'],
            claveImagen: 'Voleibol', // Clave de búsqueda de imagen
            respuesta_correcta: 'Voleibol',
        },
        {
            categoria: 'deportes',
            pregunta: "¿Qué deporte se representa en esta imagen donde los jugadores compiten utilizando un bastón y una pelota pequeña?",
            opciones: ['Hockey', 'Lacrosse', 'Críquet', 'Polo'],
            claveImagen: 'Lacrosse', // Clave de búsqueda de imagen
            respuesta_correcta: 'Lacrosse',
        },
        // Preguntas adicionales de la categoría 'programacion'
        {
            categoria: 'programacion',
            pregunta: "¿Qué lenguaje de programación se muestra en esta imagen, conocido por su uso en el desarrollo de aplicaciones web del lado del servidor?",
            opciones: ['JavaScript', 'Python', 'Ruby', 'PHP'],
            claveImagen: 'JavaScript', // Clave de búsqueda de imagen
            respuesta_correcta: 'JavaScript',
        },
        {
            categoria: 'programacion',
            pregunta: "¿Cuál de estos sistemas operativos es conocido por su uso en servidores web y su naturaleza de código abierto?",
            opciones: ['Linux', 'Windows', 'macOS', 'Unix'],
            claveImagen: 'Linux', // Clave de búsqueda de imagen
            respuesta_correcta: 'Linux',
        },
    ]
}
