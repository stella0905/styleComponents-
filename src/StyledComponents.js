import styled from "styled-components";

export const Button = styled.button`
width :${(props) => {
    switch (props.size) {
      case 'L':
        return '200px'
      case 'M':
        return '130px'
      case 'S':
        return '100px'
    }
  }};
height:${(props) => {
    switch (props.size) {
      case 'M':
        return '45px'
      case 'S':
        return '40px'
      default:
        return '50px'
    }
  }};
color:${(props) => {
    switch (props.type) {
      case 'primary':
        return '#98B1F3'
      case 'negative':
        return '#5E72BF'
      default:
        return 'black'
    }
  }};
background-color:${(props) => {
    switch (props.type) {
      case 'primary':
        return props.size === 'L' ? 'transparent' : '#FFF2F2'
      case 'negative':
        return props.size === 'L' ? 'transparent' : '#E5E0FF'
      default:
        return 'transparent'
    }
  }};
border:3px solid ${(props) => {
    switch (props.size) {
      case 'L':
        return props.type === "primary" ? '#FFF2F2' : '#E5E0FF'
      default:
        return 'transparent'
    }
  }};
border-radius:8px;
margin:10px
`


