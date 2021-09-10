import React, { FC, useState, useEffect } from 'react'
import { Invoice, ProductLine } from '../data/types'
import {ToWords} from 'to-words';
import { initialInvoice, initialProductLine } from '../data/initialData'
import EditableInput from './EditableInput'
import EditableSelect from './EditableSelect'
import EditableTextarea from './EditableTextarea'
import EditableCalendarInput from './EditableCalendarInput'
import EditableDesc from './EditableDesc'
import countryList from '../data/countryList'
import itemList from '../data/itemList'
import Document from './Document'
import Page from './Page'
import View from './View'
import Text from './Text'
import { Font } from '@react-pdf/renderer'
import Download from './DownloadPDF'
import format from 'date-fns/format'

Font.register({
  family: 'Nunito',
  fonts: [
    { src: 'https://fonts.gstatic.com/s/nunito/v12/XRXV3I6Li01BKofINeaE.ttf' },
    { src: 'https://fonts.gstatic.com/s/nunito/v12/XRXW3I6Li01BKofA6sKUYevN.ttf', fontWeight: 600 },
  ],
})

interface Props {
  data?: Invoice
  pdfMode?: boolean
}
export interface SelectOption {
  value: string
  label: string
}

const InvoicePage: FC<Props> = ({ data, pdfMode }) => {
  const [invoice, setInvoice] = useState<Invoice>(data ? { ...data } : { ...initialInvoice })
  const [subTotal, setSubTotal] = useState<number>()
  const [saleTax1, setSaleTax1] = useState<number>()
  const [saleTax2, setSaleTax2] = useState<number>()
  const [finalPrice, setFinalPrice]=useState<number>()
  const [ruppes,setRuppes] = useState<string>()
  const toWords = new ToWords();

  const dateFormat = 'MMM dd, yyyy'
  const invoiceDate = invoice.invoiceDate !== '' ? new Date(invoice.invoiceDate) : new Date()
  const invoiceDueDate =
    invoice.invoiceDueDate !== ''
      ? new Date(invoice.invoiceDueDate)
      : new Date(invoiceDate.valueOf())

  if (invoice.invoiceDueDate === '') {
    invoiceDueDate.setDate(invoiceDueDate.getDate() + 30)
  }

  const handleChange = (name: keyof Invoice, value: string) => {
    if (name !== 'productLines' && name!=='companyCountry') {
      const newInvoice = { ...invoice }
      newInvoice[name] = value
      setInvoice(newInvoice)
    }
  }

  const handleSelectChange=(name:keyof Invoice, value:any)=>{
    if (name === 'companyCountry') {
      const newInvoice = { ...invoice }
      newInvoice.companyCountry = value
      setInvoice(newInvoice)
    }
  }

  const handleProductLineChange = (index: number, name: keyof ProductLine, value: any) => {
    const productLines = invoice.productLines.map((productLine, i) => {
      if (i === index) {
        const newProductLine = { ...productLine }

        if (name === 'description') {
          newProductLine[name] = value
          newProductLine.rate=value.price
        } else {
          if (
            value[value.length - 1] === '.' ||
            (value[value.length - 1] === '0' && value.includes('.'))
          ) {
            newProductLine[name] = value
          } else {
            const n = parseFloat(value)
            newProductLine[name] = (n ? n : 0).toString()
          }
        }

        return newProductLine
      }

      return { ...productLine }
    })

    setInvoice({ ...invoice, productLines })
  }

  const handleRemove = (i: number) => {
    const productLines = invoice.productLines.filter((productLine, index) => index !== i)

    setInvoice({ ...invoice, productLines })
  }

  const handleAdd = () => {
    const productLines = [...invoice.productLines, { ...initialProductLine }]

    setInvoice({ ...invoice, productLines })
  }

  const calculateAmount = (quantity: string, rate: string) => {
    const quantityNumber = parseFloat(quantity)
    const rateNumber = parseFloat(rate)
    const amount = quantityNumber && rateNumber ? quantityNumber * rateNumber : 0

    return amount.toFixed(2)
  }

  useEffect(() => {
    let subTotal = 0

    invoice.productLines.forEach((productLine) => {
      const quantityNumber = parseFloat(productLine.quantity)
      const rateNumber = parseFloat(productLine.rate)
      const amount = quantityNumber && rateNumber ? quantityNumber * rateNumber : 0

      subTotal += amount
    })

    setSubTotal(subTotal)
  }, [invoice.productLines])

  useEffect(() => {
    const match = invoice.taxLabel1.match(/@(\d+)/)
    console.log(match)
    const taxRate1 = match ? parseFloat(match[1]) : 0
    const saleTax1 = subTotal ? (subTotal * taxRate1) / 100 : 0
    setSaleTax1(saleTax1)
   
  }, [subTotal,invoice.taxLabel1])

  useEffect(() => {
    const match = invoice.taxLabel2.match(/@(\d+)/)
    const taxRate2 = match ? parseFloat(match[1]) : 0
    const saleTax2 = subTotal ? (subTotal * taxRate2) / 100 : 0
    setSaleTax2(saleTax2)
   
  }, [subTotal,invoice.taxLabel2])

  useEffect(()=>{
    if(subTotal && saleTax1 && saleTax2){
      setFinalPrice(subTotal+saleTax1+saleTax2);
    }
    // const tmp='ABC'
    // handleChange('rupeesTag',tmp );
  },[subTotal,saleTax1,saleTax2])

  useEffect(()=>{
    const tmp=(finalPrice)?toWords.convert(Math.round(finalPrice)):'Zero'
    handleChange('rupeesTag',tmp)
  },[finalPrice])

  return (
    <Document pdfMode={pdfMode}>
      <Page className="invoice-wrapper" pdfMode={pdfMode}>
        {!pdfMode && <Download data={invoice} />}
        <View className="flex" pdfMode={pdfMode}>
          <View className="w-50" pdfMode={pdfMode}>
            <EditableInput
              className="fs-14 bold"
              placeholder="Your Company"
              value={invoice.companyName}
              onChange={(value) => handleChange('companyName', value)}
              pdfMode={pdfMode}
            />
            <EditableInput
              placeholder="Company's Address"
              value={invoice.companyAddress}
              onChange={(value) => handleChange('companyAddress', value)}
              pdfMode={pdfMode}
            />
            <EditableInput
              placeholder="City, State Zip"
              value={invoice.companyAddress2}
              onChange={(value) => handleChange('companyAddress2', value)}
              pdfMode={pdfMode}
            />
            <EditableInput
              placeholder=""
              value={invoice.companyAddress3}
              onChange={(value) => handleChange('companyAddress3', value)}
              pdfMode={pdfMode}
            />
            <View className="flex " pdfMode={pdfMode}>
              <View className="w-20" pdfMode={pdfMode}>
                <Text className="input bold w-100" pdfMode={pdfMode}>
                  {invoice.notesLabel}
                </Text>
              </View>
              <View className="w-50" pdfMode={pdfMode}>
                <Text className="input bold w-100" pdfMode={pdfMode}>
                  {invoice.GSTIN}
                </Text>
              </View>
            </View>
          </View>
          <View className="w-50" pdfMode={pdfMode}>
            <EditableInput
              className="fs-20 right bold"
              placeholder="Invoice"
              value={invoice.title}
              onChange={(value) => handleChange('title', value)}
              pdfMode={pdfMode}
            />
          </View>
        </View>

        <View className="flex mt-5" pdfMode={pdfMode}>
          <View className="w-55" pdfMode={pdfMode}>
            <EditableInput
              className="bold dark mb-2"
              value={invoice.billTo}
              onChange={(value) => handleChange('billTo', value)}
              pdfMode={pdfMode}
            />
            <EditableInput
              placeholder="Your Client's Name"
              value={invoice.clientName}
              onChange={(value) => handleChange('clientName', value)}
              pdfMode={pdfMode}
            />
            <EditableInput
              placeholder="Client's Address"
              value={invoice.clientAddress}
              onChange={(value) => handleChange('clientAddress', value)}
              pdfMode={pdfMode}
            />
            <EditableInput
              placeholder="City, State Zip"
              value={invoice.clientAddress2}
              onChange={(value) => handleChange('clientAddress2', value)}
              pdfMode={pdfMode}
            />
            <View className="flex mb-2" pdfMode={pdfMode}>
              <View className="w-20" pdfMode={pdfMode}>
                <Text className="input bold" pdfMode={pdfMode}>
                  {"GST No."}
                </Text>
              </View>
              <View className="w-60" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.clientGSTIN}
                  onChange={(value) => handleChange('clientGSTIN', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            {/* <EditableSelect
              options={countryList}
              value={invoice.clientCountry}
              onChange={(value) => handleChange('clientCountry', value)}
              pdfMode={pdfMode}
            /> */}
          </View>
          <View className="w-45" pdfMode={pdfMode}>
            <View className="flex mb-2" pdfMode={pdfMode}>
              <View className="w-40" pdfMode={pdfMode}>
                <EditableInput
                  className="bold"
                  value={invoice.invoiceTitleLabel}
                  onChange={(value) => handleChange('invoiceTitleLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-60" pdfMode={pdfMode}>
                <EditableInput
                  placeholder="123"
                  value={invoice.invoiceTitle}
                  onChange={(value) => handleChange('invoiceTitle', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="flex mb-2" pdfMode={pdfMode}>
              <View className="w-40" pdfMode={pdfMode}>
                <Text className="input bold" pdfMode={pdfMode}>
                  {"Delivery Note"}
                </Text>
              </View>
              <View className="w-60" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.invoiceDelNote}
                  onChange={(value) => handleChange('invoiceDelNote', value)}
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="flex mb-2" pdfMode={pdfMode}>
              <View className="w-40" pdfMode={pdfMode}>
                <EditableInput
                  className="bold"
                  value={invoice.invoiceDateLabel}
                  onChange={(value) => handleChange('invoiceDateLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-60" pdfMode={pdfMode}>
                <EditableCalendarInput
                  value={format(invoiceDate, dateFormat)}
                  selected={invoiceDate}
                  onChange={(date) =>
                    handleChange(
                      'invoiceDate',
                      date && !Array.isArray(date) ? format(date, dateFormat) : ''
                    )
                  }
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="flex mb-2" pdfMode={pdfMode}>
              <View className="w-40" pdfMode={pdfMode}>
                <EditableInput
                  className="bold"
                  value={invoice.invoiceDueDateLabel}
                  onChange={(value) => handleChange('invoiceDueDateLabel', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-60" pdfMode={pdfMode}>
                <EditableCalendarInput
                  value={format(invoiceDueDate, dateFormat)}
                  selected={invoiceDueDate}
                  onChange={(date) =>
                    handleChange(
                      'invoiceDueDate',
                      date && !Array.isArray(date) ? format(date, dateFormat) : ''
                    )
                  }
                  pdfMode={pdfMode}
                />
              </View>
            </View>
            <View className="flex mb-2" pdfMode={pdfMode}>
                <View className="w-40" pdfMode={pdfMode}>
                  <Text className="input bold" pdfMode={pdfMode}>
                    {"Place of Supply"}
                  </Text>
                </View>
                <View className="w-60" pdfMode={pdfMode}>
                  <Text className="input" pdfMode={pdfMode}>
                    {"Gujarat (24)"}
                  </Text>
                </View>
              </View>
          </View>
        </View>

        <View className="mt-10 bg-dark flex" pdfMode={pdfMode}>
          <View className="w-18 p-4-8" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.invoiceSrNo}
              onChange={(value) => handleChange('invoiceSrNo', value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="w-18 p-4-8" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.invoiceOrderNo}
              onChange={(value) => handleChange('invoiceOrderNo', value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="w-85 p-4-8" pdfMode={pdfMode}>
            <EditableInput
              className="white bold"
              value={invoice.productLineDescription}
              onChange={(value) => handleChange('productLineDescription', value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="w-25 p-4-8" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.hsnLabel}
              onChange={(value) => handleChange('hsnLabel', value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="w-17 p-4-8" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.productLineQuantity}
              onChange={(value) => handleChange('productLineQuantity', value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="w-17 p-4-8" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.productLineQuantityRate}
              onChange={(value) => handleChange('productLineQuantityRate', value)}
              pdfMode={pdfMode}
            />
          </View>
          <View className="w-18 p-4-8" pdfMode={pdfMode}>
            <EditableInput
              className="white bold right"
              value={invoice.productLineQuantityAmount}
              onChange={(value) => handleChange('productLineQuantityAmount', value)}
              pdfMode={pdfMode}
            />
          </View>
        </View>

        {invoice.productLines.map((productLine, i) => {
          return pdfMode && !productLine.description? (
            <Text key={i}></Text>
          ) : (
            <View key={i} className="row flex" pdfMode={pdfMode}>
             <View className="w-18 p-4-8" pdfMode={pdfMode}>
                <Text className="dark left" pdfMode={pdfMode}>
                  {`${i+1}`}
                </Text>
              </View>
              <View className="w-18 p-4-8" pdfMode={pdfMode}>
                <EditableInput
                    className="dark left"
                    value={productLine.orderNo}
                    onChange={(value) => handleProductLineChange(i, 'orderNo', value)}
                    pdfMode={pdfMode}
                />
              </View>
              <View className="w-85 p-4-8 pb-5" pdfMode={pdfMode}>
                {/* <EditableTextarea
                  className="dark"
                  rows={2}
                  placeholder="Enter item name/description"
                  value={productLine.description}
                  onChange={(value) => handleProductLineChange(i, 'description', value)}
                  pdfMode={pdfMode}
                /> */}
                <EditableDesc
                  options={itemList}
                  className="dark"
                  rows={2}
                  placeholder="Enter item name/description"
                  value={productLine.description}
                  onChange={(value) => handleProductLineChange(i, 'description', value)}
                  pdfMode={pdfMode}
                  toShow={"text"}
                />
              </View>
              <View className="w-25 p-4-8 pb-5" pdfMode={pdfMode}>
                <EditableInput
                  className="dark left"
                  value={productLine.hsn}
                  onChange={(value) => handleProductLineChange(i, 'hsn', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-17 p-4-8 pb-5" pdfMode={pdfMode}>
                <EditableInput
                  className="dark right"
                  value={productLine.quantity}
                  onChange={(value) => handleProductLineChange(i, 'quantity', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-17 p-4-8 pb-5" pdfMode={pdfMode}>
                <EditableInput
                  className="dark right"
                  value={productLine.rate}
                  onChange={(value) => handleProductLineChange(i, 'rate', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-18 p-4-8 pb-5" pdfMode={pdfMode}>
                <Text className="dark right" pdfMode={pdfMode}>
                  {calculateAmount(productLine.quantity, productLine.rate)}
                </Text>
              </View>
              {!pdfMode && (
                <button
                  className="link row__remove"
                  aria-label="Remove Row"
                  title="Remove Row"
                  onClick={() => handleRemove(i)}
                >
                  <span className="icon icon-remove bg-red"></span>
                </button>
              )}
            </View>
          )
        })}

        <View className="flex" pdfMode={pdfMode}>
          <View className="w-50 mt-5" pdfMode={pdfMode}>
            {!pdfMode && (
              <button className="link" onClick={handleAdd}>
                <span className="icon icon-add bg-green mr-10"></span>
                Add Line Item
              </button>
            )}
          </View>
          <View className="w-50 mt-10" pdfMode={pdfMode}>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 p-2" pdfMode={pdfMode}>
                <Text className="input" pdfMode={pdfMode}>
                  {invoice.subTotalLabel}
                </Text>
              </View>
              <View className="w-50 p-2" pdfMode={pdfMode}>
                <Text className="right bold dark" pdfMode={pdfMode}>
                  {subTotal?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 p-2" pdfMode={pdfMode}>
                <EditableInput
                  value={invoice.taxLabel1}
                  onChange={(value) => handleChange('taxLabel1', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 p-2" pdfMode={pdfMode}>
                <Text className="right bold dark" pdfMode={pdfMode}>
                  {saleTax1?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex" pdfMode={pdfMode}>
              <View className="w-50 p-2" pdfMode={pdfMode}>
              <EditableInput
                  value={invoice.taxLabel2}
                  onChange={(value) => handleChange('taxLabel2', value)}
                  pdfMode={pdfMode}
                />
              </View>
              <View className="w-50 p-2" pdfMode={pdfMode}>
                <Text className="right bold dark" pdfMode={pdfMode}>
                  {saleTax2?.toFixed(2)}
                </Text>
              </View>
            </View>
            <View className="flex " pdfMode={pdfMode}>
              <View className="w-50 p-2" pdfMode={pdfMode}>
                <Text className="input" pdfMode={pdfMode}>
                  {`Round off`}
                </Text>
              </View>
              <View className="w-50 p-2" pdfMode={pdfMode}>
                <Text className="right bold dark" pdfMode={pdfMode}>
                  {`${(finalPrice && subTotal)? (Math.round(finalPrice)-finalPrice).toFixed(2):0}`}
                </Text>
              </View>
            </View>
            <View className="flex " pdfMode={pdfMode}>
              <View className="w-50 p-2" pdfMode={pdfMode}>
                <Text className="input" pdfMode={pdfMode}>
                  {invoice.totalLabel}
                </Text>
              </View>
              <View className="w-50 p-2" pdfMode={pdfMode}>
                <Text className="right bold dark" pdfMode={pdfMode}>
                  {`${finalPrice? Math.round(finalPrice):0}`}
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View className="" pdfMode={pdfMode}>
          <View className="w-60 flex" pdfMode={pdfMode}>
            <div className="w-10">
              <Text className="left dark bold" pdfMode={pdfMode}>
                {`Ruppes:`}
              </Text>
            </div>
            <EditableInput
               className="w-100"
               value={invoice.rupeesTag}
               onChange={(value) => handleChange('rupeesTag', value)}
               pdfMode={pdfMode}
            />
          </View>
        </View>
        <View className="mt-5" pdfMode={pdfMode}>
          <View className="w-60 flex" pdfMode={pdfMode}>
            <div className="w-30">
              <Text className="left dark" pdfMode={pdfMode}>
                {`Bank details:`}
              </Text>
            </div>
            <Text className="w-100 pl-5" pdfMode={pdfMode}>
              {process.env.REACT_APP_BANK_DETAIL}
            </Text>
          </View>
        </View>
        <View className="" pdfMode={pdfMode}>
          <View className="w-60 flex" pdfMode={pdfMode}>
            <div className="w-30">
              <Text className="left dark" pdfMode={pdfMode}>
                {`A/c No:`}
              </Text>
            </div>
            <Text className="w-100" pdfMode={pdfMode}>
              {process.env.REACT_APP_ACC_WORD}
            </Text>
          </View>
        </View>
        <View className="" pdfMode={pdfMode}>
          <View className="w-60 flex" pdfMode={pdfMode}>
            <div className="w-30">
              <Text className="left dark" pdfMode={pdfMode}>
              {`IFSC code: `}
              </Text>
            </div>
            <Text className="w-100" pdfMode={pdfMode}>
            {process.env.REACT_APP_RTBG}
            </Text>
          </View>
        </View>
        
        <View className="small mt-5" pdfMode={pdfMode}>
          <EditableInput
            className="bold w-100"
            value={invoice.termLabel}
            onChange={(value) => handleChange('termLabel', value)}
            pdfMode={pdfMode}
          />
          <Text className="w-100" pdfMode={pdfMode}>
              {`1.Interest @ 13% will be charged on Bill remaining unpaid after one month from the date of delivery.`}
          </Text>
          <Text className="w-100" pdfMode={pdfMode}>
              {`2.Complain if any regarding this Bill should be made within 7 days from the date of recieved Goods.`}
          </Text>
          <Text className="w-100" pdfMode={pdfMode}>
              {`3.Our risk & responsibility ceases immediately the Goods are Hand over to Carrier.`}
          </Text>
          <Text className="w-100" pdfMode={pdfMode}>
              {`4.Subject to NAVSARI Juridiction only.`}
          </Text>
        </View>
      </Page>
    </Document>
  )
}

export default InvoicePage
