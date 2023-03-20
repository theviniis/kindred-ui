import React from 'react';
import * as S from './Input.styles';
import * as T from './Input.types';

export const Input: React.FC<T.InputProps> = ({
  id = 'input-id-' + React.useId(),
  name = '',
  type = 'text',
  label = '',
  placeholder = ' ',
  loading = false,
  disabled = false,
  variant = 'plain',
  skin = 'neutral',
  size = 'md',
  supportingText = '',
  startHelper,
  endHelper,
  value,
  onBlur,
  onChange,
  ...props
}) => {
  return (
    <S.InputWrapper variant={variant} skin={skin} size={size} loading={loading}>
      <S.Label htmlFor={id} label={label}>
        {label ?? placeholder}
      </S.Label>
      <S.Input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        {...props}
      />
      {supportingText && <S.SupportingText>{supportingText}</S.SupportingText>}
      {(startHelper || endHelper) && (
        <S.IconsWrapper>
          {startHelper && <span id="input-start-icon">{startHelper}</span>}
          {endHelper && <span id="input-end-icon">{endHelper}</span>}
        </S.IconsWrapper>
      )}
    </S.InputWrapper>
  );
};
