import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('Heading is rendering fine', () => {
    // renderiza o component
    const { container } = render(<Main />)

    // busca o elemento e verifica a existência dele
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    // gerar snapshot
    expect(container.firstChild).toMatchSnapshot()
  })

  it('Render the colors correctly', () => {
    // renderiza o component
    const { container } = render(<Main />)

    // verifica se a cor do background está correta
    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' })
  })
})
