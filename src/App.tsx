import { Button, NextUIProvider } from "@nextui-org/react"

export const App = () => {
    return (
        <NextUIProvider>
            <Button color="danger">Hola</Button>
        </NextUIProvider>
    )
}