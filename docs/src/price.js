function ticketTotal(price, count, discount = 0) {
  return Math.round(price * count * (1 - discount));
}

module.exports = { ticketTotal };
