export interface ISchemaCodeProps {
  schema: any
  onChange?: any
}

export interface ISchemaTreeProps {
  schema: object
  components: any
  onChange?: Function
}

export interface IFieldEditorProps {
  schema: object
  components: any
  xProps: any
  xRules: any
  onChange?: Function
}

export interface ISchemaPreviewProps {
  schema: object
}

export enum InputTypes {
  INPUT = 'input',
  NUMBER_PICKER = 'numberPicker',
  CHECKBOX = 'checkbox',
  TEXT_AREA = 'textArea'
}

export enum ComponentPropsTypes {
  X_COMPONENT = 'x-component',
  X_PROPS = 'x-props',
  X_COMPONENT_PROPS = 'x-component-props',
  X_RULES = 'x-rules'
}
