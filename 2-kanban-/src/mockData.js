import { v4 as uuidv4 } from 'uuid'

const mockData = [
    {
        id: uuidv4(),
        title: ' 📃 Por hacer',
        tasks: [
            {
                id: uuidv4(),
                title: 'Curso JavaScript'
            },
            {
                id: uuidv4(),
                title: 'Curso html'
            },
            {
                id: uuidv4(),
                title: 'Curso css'
            },
        ]
    },
    {
        id: uuidv4(),
        title: ' ✏️ En progreso',
        tasks: [
            {
                id: uuidv4(),
                title: 'Curso C#'
            },
            {
                id: uuidv4(),
                title: 'Curso React'
            }
        ]
    },
    {
        id: uuidv4(),
        title: ' ✔️ Completado',
        tasks: [
            {
                id: uuidv4(),
                title: 'Suscribirse'
            }
        ]
    }
]

export default mockData