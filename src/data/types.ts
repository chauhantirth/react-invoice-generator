import { CSSProperties } from 'react'

export interface ProductLine {
  description: object
  quantity: string
  rate: string
  orderNo:string
}

export interface Invoice {
  title: string
  companyName: string
  name: string
  companyAddress: string
  companyAddress2: string
  companyCountry: object

  billTo: string
  clientName: string
  clientAddress: string
  clientAddress2: string
  clientCountry: string

  invoiceTitleLabel: string
  invoiceTitle: string
  invoiceDateLabel: string
  invoiceDate: string
  invoiceDueDateLabel: string
  invoiceDueDate: string
  invoiceSrNo:string
  invoiceOrderNo:string
  productLineDescription: string
  productLineQuantity: string
  productLineQuantityRate: string
  productLineQuantityAmount: string

  productLines: ProductLine[]

  subTotalLabel: string
  taxLabel: string

  totalLabel: string
  currency: string

  notesLabel: string
  notes: string
  termLabel: string
  term: string
}

export interface CSSClasses {
  [key: string]: CSSProperties
}
