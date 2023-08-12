import React from 'react';
import { Button } from "semantic-ui-react";
import { Navigation } from "./routes";
import "./App.scss";
import { ClientLayout } from "./layouts"

export default function App() {
  return (
    <ClientLayout>
      <h1>Hola Mundo!</h1>
      <Button primaty>Click Me</Button>
      <Navigation />
    </ClientLayout>
  )
}
