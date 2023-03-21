import React from 'react';
import * as T from './Input.types';
import * as S from './Input.styles';

export const Input: React.FC<T.InputProps> = ({
  id = crypto.randomUUID() + '-input',
  name = '',
  type = 'text',
  label,
  placeholder = ' ',
  value = '',
  skin = 'neutral',
  supportingText = '',
  size = 'md',
  startIcon,
  endIcon,
  loading = false,
  disabled = false,
  onChange,
  onBlur,
  ...props
}) => {
  return (
    <S.Wrapper
      skin={skin}
      startIcon={startIcon}
      endIcon={endIcon}
      label={label}
    >
      <div>
        <label htmlFor={id}>{label}</label>
        <input
          aria-invalid="false"
          id={id}
          type={type}
          value={value}
          disabled={disabled}
          onChange={onChange}
          onBlur={onBlur}
          name={name}
          placeholder={placeholder}
          aria-describedby={id + 'supportingText'}
          {...props}
        />
        <fieldset aria-hidden="true">
          <legend>
            <span>{label}</span>
          </legend>
        </fieldset>
      </div>
      {(startIcon || endIcon) && (
        <S.IconsWrapper>
          <span>{startIcon && startIcon}</span>
          <span>{endIcon && endIcon}</span>
        </S.IconsWrapper>
      )}
      {supportingText && (
        <S.SupportingText id={id + 'supportingText'}>
          {supportingText}
        </S.SupportingText>
      )}
    </S.Wrapper>
  );
};
