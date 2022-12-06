import { render } from "@testing-library/react"
import "@testing-library/jest-dom"
import Button from "./index"

describe("ButtonComponent", () => {
  it("Should render button component", () => {
    const { getByTestId } = render(<Button data-testid="button" />)
    expect(getByTestId("button")).toBeInTheDocument()
  })

  it("Should match snapshot", () => {
    const { container } = render(<Button data-testid="button" />)
    expect(container).toMatchSnapshot()
  })
})
