import React, { useState, useRef } from 'react'
import { Form as BulmaForm, Button } from 'react-bulma-components'

const { Field, Control, Label, Input } = BulmaForm

const Form = () => {
  const [formValues, setFormValues] = useState({
    name: '',
    priceUnitary: '',
    size: '',
    description: '',
  })

  const inputFileRef = useRef()

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
    console.log(inputFileRef.current.files)
  }

  return (
    <form onSubmit={handleSubmit}>
      <Field>
        <Label>Name</Label>
        <Control>
          <Input
            placeholder="Text input"
            name="name"
            value={formValues.name}
            onChange={handleChange}
          />
        </Control>
      </Field>
      <Field>
        <Label>Price unitary</Label>
        <Control>
          <Input
            placeholder="Text input"
            type="number"
            name="priceUnitary"
            value={formValues.priceUnitary}
            onChange={handleChange}
          />
        </Control>
      </Field>
      <Field>
        <Label>Size</Label>
        <Control>
          <Input
            placeholder="Text input"
            name="size"
            type="number"
            value={formValues.size}
            onChange={handleChange}
          />
        </Control>
      </Field>
      <Field>
        <Label>Description</Label>
        <Control>
          <Input
            placeholder="Text input"
            name="description"
            value={formValues.description}
            onChange={handleChange}
          />
        </Control>
      </Field>

      <Field>
        <Label>Image</Label>
        <Control>
          <input type="file" ref={inputFileRef} />
        </Control>
      </Field>
      <Button type="submit" color="primary">
        Save
      </Button>
    </form>
  )
}

export default Form
