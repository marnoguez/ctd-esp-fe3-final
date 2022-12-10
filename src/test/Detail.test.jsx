import  '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Detail from '../Routes/Detail'
import axios from 'axios'


beforeEach(() =>{
    render(<Detail/>)
})

describe('Detail', () => {
    test('Verificacion campos en Detail', () => {
        const Nombre = screen.getByText("Name")
        const Email = screen.getByText("Email")
        const Telefono = screen.getByText("Phone")
        const Website = screen.getByText("Website")
        expect(Nombre).toBeInTheDocument();
        expect(Email).toBeInTheDocument();
        expect(Telefono).toBeInTheDocument();
        expect(Website).toBeInTheDocument();
    })

    const fetchData = () => axios.get('https://jsonplaceholder.typicode.com/users/9%27);

    test("Testing fetch detail", () => {

        return fetchData().then(data => { 
            expect(data.data.id).toBe(9);
            expect(data.data.name).toBe("Glenna Reichert");
            expect(data.data.username).toBe("Delphine");
        })
    })
})