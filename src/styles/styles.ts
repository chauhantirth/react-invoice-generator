import { CSSClasses } from '../data/types'

const colorDark = '#222'
const colorDark2 = '#666'
const colorGray = '#e3e3e3'
const colorWhite = '#fff'

const styles: CSSClasses = {
  dark: {
    color: colorDark,
  },

  white: {
    color: colorWhite,
  },

  'bg-dark': {
    backgroundColor: colorDark2,
  },

  'bg-gray': {
    backgroundColor: colorGray,
  },

  flex: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },

  'w-auto': {
    flex: 1,
    paddingRight: '8px',
  },

  'ml-30': {
    flex: 1,
  },

  'w-100': {
    width: '100%',
  },

  'w-50': {
    width: '50%',
  },

  'w-70':{
    width:'70%',
  },

  'w-55': {
    width: '55%',
  },

  'w-45': {
    width: '45%',
  },

  'w-60': {
    width: '60%',
  },

  'w-40': {
    width: '40%',
  },

  'w-48': {
    width: '48%',
  },

  'w-85':{
    width:'85%',
  },

  'w-65':{
    width:'49%',
  },

  'w-10':{
    width: '5%',
  },

  'w-17': {
    width: '12%',
  },

  'w-18': {
    width: '12%',
  },

  'w-11':{
    width :'11%'
  },

  'w-20': {
    width: '20%',
  },

  'w-30':{
    width: '30%',
  },

  row: {
    position: 'relative',
    borderBottom: `1px solid lightgrey`,
  },

  darkRow:{
    position: 'relative',
    borderBottom: '2px solid #808080',
  },

  'br-t':{
    borderTop:`2px solid #808080`
  },

  'br-r':{
    borderRight:`1px solid grey`
  },

  'mt-40': {
    marginTop: '40px',
  },

  'mt-30': {
    marginTop: '30px',
  },

  'mt-20': {
    marginTop: '20px',
  },

  'mt-10': {
    marginTop: '10px',
  },

  'mt-5':{
    marginTop:'5px',
  },

  'mr-5':{
    marginRight:'5px',
  },

  'mr-10':{
    marginRight:'10px',
  },

  'mb-5': {
    marginBottom: '5px',
  },

  'p-4-8': {
    padding: '4px 8px',
  },

  'p-5': {
    padding: '5px',
  },

  'pl-5':{
    paddingLeft:'5px',
  },

  'pb-10': {
    paddingBottom: '10px',
  },

  right: {
    textAlign: 'right',
  },

  left:{
    textAlign:'left',
  },

  bold: {
    fontWeight: 'bold',
  },

  center:{
    textAlign:'center',
  },

  flexCenter:{
    justifyContent:'center',
  },

  flexClass:{
    display:'flex !important',
    width:'auto !important',
  },
  'fs-8':{
    fontSize: '8px',
  },

  'fs-20': {
    fontSize: '20px',
  },

  'fs-45': {
    fontSize: '45px',
  },

  'fs-30':{
    fontSize:'30px',
  },

  'pt-5':{
    paddingTop:'5px',
  },
  
  'pb-5':{
    paddingBottom: '5px',
  },

  alignRight:{
    textAlign:'left',
  },

  bottom:{
    bottom: '50px',
    position:'absolute',
    left: '17px'
  },

  bottomBox:{
    bottom:'240px',
    right:'17px',
    position:'absolute',
  },

  signBox:{
    border:'1px solid #808080',
    margin: '0 5px 5px 0',
    height: '80px',
    width: '100%',
    display:'block',
  },

  bBottom:{
    borderBottom: '10px solid #808080',
  },

  page: {
    fontFamily: 'Nunito',
    fontSize: '9px',
    fontWeight:400,
    color: 'black',
    padding: '17px',
    border: '1px solid black'
  },
  small:{
    fontSize:'7px',
  },
  span: {
    padding: '3px 5px 3px 0',
  },
  select: {
    fontSize: '9px',
    color: 'black',
    background: 'transparent',
    borderRadius: '2px',
    outline: '0'
  },
  textarea: {
    fontSize: '9px',
    color: 'black',
    background: 'transparent',
    borderRadius: '2px',
    outline: '0'
  },
  input:{
    fontSize: '9px',
    color: 'black',
    background: 'transparent',
    borderRadius: '2px',
    outline: '0'
  }
}

export default styles
