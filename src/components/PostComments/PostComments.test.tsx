import { fireEvent, render, screen } from '@testing-library/react';
import PostComments from '.';

describe('Teste para o componente PostComments', () => {
    it('Deve adicionar dois comentários corretamente', () => {
        render(<PostComments/>);

      
        fireEvent.change(screen.getByTestId('comentario'), 
        { target: 
            { value: 'Primeiro comentário' } 
        });
        fireEvent.click(screen.getByTestId('botao'));

      
        expect(screen.getByText('Primeiro comentário')).toBeInTheDocument();

    
        fireEvent.change(screen.getByTestId('comentario'), { target: { value: 'Segundo comentário' } });
        fireEvent.click(screen.getByTestId('botao'));

      
        expect(screen.getByText('Segundo comentário')).toBeInTheDocument();
    });
});