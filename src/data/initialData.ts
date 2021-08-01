import { ProductLine, Invoice } from './types'

export const initialProductLine: ProductLine = {
  description: {value:"Item1", label:"Item 1", price:'12.5'},
  quantity: '1',
  rate: '0.00',
  orderNo:'0'
}

export const initialInvoice: Invoice = {
  title: 'INVOICE',
  companyName: 'Jay Ambe Engineering Workshop',
  name: '',
  companyAddress: 'Plot no 490',
  companyAddress2: 'New Colony, Old G.I.D.C.',
  companyCountry: {value:'India',label:'India'},
  billTo: 'Bill To:',
  clientName: '',
  clientAddress: '',
  clientAddress2: '',
  clientCountry: 'United States',
  invoiceTitleLabel: 'Invoice#',
  invoiceTitle: '',
  invoiceDateLabel: 'Invoice Date',
  invoiceDate: '',
  invoiceDueDateLabel: 'Due Date',
  invoiceDueDate: '',
  invoiceSrNo:'Sr no.',
  invoiceOrderNo: 'Order no',
  productLineDescription: 'Item Description',
  productLineQuantity: 'Qty',
  productLineQuantityRate: 'Rate',
  productLineQuantityAmount: 'Amount',
  productLines: [
    {
      description: {value:"Item1", label:"Item 1", price:'12.5'},
      quantity: '2',
      rate: '100.00',
      orderNo:'B667'
    },
    { ...initialProductLine },
  ],
  subTotalLabel: 'Sub Total',
  taxLabel: 'Sale Tax (10%)',
  totalLabel: 'TOTAL',
  currency: '$',
  notesLabel: 'Notes',
  notes: 'It was great doing business with you.',
  termLabel: 'Terms & Conditions',
  term: 'Please make the payment by the due date.',
}
