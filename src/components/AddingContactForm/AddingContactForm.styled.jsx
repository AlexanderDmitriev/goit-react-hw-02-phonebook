import styled from '@emotion/styled'

export const AddingForm=styled.form`
    border: ${props => `1px solid ${props.theme.colors.textColor}`};
    border-radius: ${props => props.theme.spacing(1)};
    width: ${props => props.theme.spacing(120)};
    padding: ${props => props.theme.spacing(3)};
`;