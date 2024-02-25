import { SalesProduct } from './sales.model';

const findLastSalesInvoiceNumber = async () => {
  try {
    const lastInvoiceNumber = await SalesProduct.findOne({
      invoice: 1,
    })
      .sort({
        createdAt: -1,
      })
      .lean();
    return lastInvoiceNumber?.invoice
      ? lastInvoiceNumber.invoice.substring(2)
      : undefined;
  } catch (err) {
    console.log(err);
  }
  /*   const lastInvoiceNumber = await SalesProduct.findOne({
    invoice: 1,
  })
    .sort({
      createdAt: -1,
    })
    .lean(); */

  /*  console.log(lastInvoiceNumber, 'masud');
  return lastInvoiceNumber?.invoice
    ? lastInvoiceNumber.invoice.substring(2)
    : undefined; */
};

export const generateSalesInvoiceNumber = async () => {
  const currentId = (await findLastSalesInvoiceNumber()) || (0).toString();

  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `I-${incrementId}`;
  return incrementId;
};
