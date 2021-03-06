import { Ticket, TicketAttrs } from '../../models/ticket';

export const createTicket = async (ticket?: Partial<TicketAttrs>) => {
  const newTicket = Ticket.build({
    price: ticket?.price || 1,
    title: ticket?.title || 'a valid title',
    userId: ticket?.userId || '1',
  });
  return await newTicket.save();
};
