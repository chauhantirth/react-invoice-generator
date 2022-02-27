import { CSSProperties } from 'react'

export interface ProductLine {
  description: object
  quantity: string
  rate: string
  orderNo:string
  hsn:string
}

export interface Invoice {
  title: string
  companyName: string
  name: string
  companyAddress: string
  companyAddress2: string
  companyAddress3:string
  companyCountry: object
  addressDetail:object
  billTo: string
  clientAddress: string,
  clientAddress2: string,
  clientCountry: string,
  clientGSTIN:string,
  invoiceTitleLabel: string
  invoiceTitle: string
  invoiceDelNote:string
  invoiceDateLabel: string
  invoiceDate: string
  invoiceDueDateLabel: string
  invoiceDueDate: string
  invoiceSrNo:string
  invoiceOrderNo:string
  productLineDescription: string
  hsnLabel:string
  productLineQuantity: string
  productLineQuantityRate: string
  productLineQuantityAmount: string

  productLines: ProductLine[]

  subTotalLabel: string

  taxLabel1: string
  taxLabel2:string
  totalLabel:string
  currency: string
  freight:string
  notesLabel: string
  GSTIN:string
  notes: string
  rupeesTag:string
  termLabel: string
  term: string
}

export interface CSSClasses {
  [key: string]: CSSProperties
}
