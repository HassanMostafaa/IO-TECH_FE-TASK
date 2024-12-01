import React, { type PropsWithChildren, type FunctionComponent } from 'react';
import { S{{ properCase name }} } from './styles/S{{ properCase name }}';

export interface I{{ properCase name }} extends PropsWithChildren {}

export const {{ properCase name }}: FunctionComponent<I{{ properCase name }}> = ({children}) => {
  return (
    <S{{properCase name}}>
      {children}
    </S{{properCase name}}>
  )
}