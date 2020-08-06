import React, { useState, useRef } from 'react'
import { Form as BulmaForm, Button } from 'react-bulma-components'

const { Field, Control, Label, Input } = BulmaForm

const Form = ({ handleSubmit }) => {
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

  const _handleSubmit = (e) => {
    e.preventDefault()
    handleSubmit({ ...formValues, image: inputFileRef.current.files[0] })
  }

  return (
    <form onSubmit={_handleSubmit}>
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
