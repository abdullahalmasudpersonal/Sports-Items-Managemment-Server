import { SalesProduct } from './sales.model';

/// create super admin generate invoice number
const findLastSASalesInvoiceNumber = async () => {
  const lastInvoiceNumber = await SalesProduct.findOne()
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastInvoiceNumber?.invoice
    ? lastInvoiceNumber.invoice.substring(7)
    : undefined;
};

export const generateSASalesInvoiceNumber = async () => {
  const currentId = (await findLastSASalesInvoiceNumber()) || (0).toString();

  let incrementId = (Number(currentId) + 1).toString().padStart(6, '0');

  incrementId = `INV-SA-${incrementId}`;
  return incrementId;
};

/// create branch manager generate invoice number
const findLastBMSalesInvoiceNumber = async () => {
  const lastInvoiceNumber = await SalesProduct.findOne()
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastInvoiceNumber?.invoice
    ? lastInvoiceNumber.invoice.substring(7)
    : undefined;
};

export const generateBMSalesInvoiceNumber = async () => {
  const currentId = (await findLastBMSalesInvoiceNumber()) || (0).toString();

  let incrementId = (Number(currentId) + 1).toString().padStart(6, '0');

  incrementId = `INV-BM-${incrementId}`;
  return incrementId;
};

/// create seller generate invoice number
const findLastSESalesInvoiceNumber = async () => {
  const lastInvoiceNumber = await SalesProduct.findOne()
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastInvoiceNumber?.invoice
    ? lastInvoiceNumber.invoice.substring(7)
    : undefined;
};

export const generateSESalesInvoiceNumber = async () => {
  const currentId = (await findLastSESalesInvoiceNumber()) || (0).toString();

  let incrementId = (Number(currentId) + 1).toString().padStart(6, '0');

  incrementId = `INV-SE-${incrementId}`;
  return incrementId;
};

/* const findLastSalesInvoiceNumber = async () => {
  const lastInvoiceNumber = await SalesProduct.findOne()
    .sort({
      createdAt: -1,
    })
    .lean();
  return lastInvoiceNumber?.invoice
    ? lastInvoiceNumber.invoice.substring(2)
    : undefined;
};

export const generateSalesInvoiceNumber = async () => {
  const currentId = (await findLastSalesInvoiceNumber()) || (0).toString();

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `I-${incrementId}`;
  return incrementId;
}; */
