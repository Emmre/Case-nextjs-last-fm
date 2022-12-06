import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Card from "./index"

describe("CardComponent", () => {
  const props = {
    title: "Card Title",
    description: "Card Description",
    image: "https://via.placeholder.com/150",
  }

  it("Should render card component", () => {
    const { getByTestId } = render(<Card item={props} data-testid="card" />)
    expect(getByTestId("card")).toBeInTheDocument()
  })

  it("Should match snapshot", () => {
    const { container } = render(<Card item={props} data-testid="card" />)
    expect(container).toMatchSnapshot()
  })
})
