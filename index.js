//Write your code here
let attendee = {
  attendeeId: "T001",
  name:"Alce Smith",
  event: "Javascript Conference",
  ticketType: "VIP",
  ticketPrice:150.00
}
 
function logAttendeeName(attendee) {
  console.log(attendee.name)
}

logAttendeeName(attendee)

function logTicketPrice(attendee) {
  console.log(attendee.ticketPrice)
}

logTicketPrice(attendee)

function updateTicketType(attendee, newTicketType) {
  attendee.ticketType = newTicketType

}

updateTicketType(attendee, "vvip")
console.log(attendee.ticketType)


function updateTicketPrice(attendee, newTicketPrice) {
  attendee.ticketPrice = newTicketPrice
}
updateTicketPrice(attendee, 140)
console.log(attendee.ticketPrice)

function removeEventProperty(attendee) {
  delete attendee.event
}
removeEventProperty(attendee)

console.log(attendee)

function addCheckedInProperty (attendee) {
   attendee.checkedIn = true
}
addCheckedInProperty(attendee)
console.log(attendee.checkedIn)
console.log(attendee)
//Needed for the tests to work. Don't modify
module.exports = {
  ...(typeof attendee !== 'undefined' && { attendee }),
  ...(typeof logAttendeeName !== 'undefined' && { logAttendeeName }),
  ...(typeof logTicketPrice !== 'undefined' && { logTicketPrice }),
  ...(typeof updateTicketType !== 'undefined' && { updateTicketType }),
  ...(typeof updateTicketPrice !== 'undefined' && { updateTicketPrice }),
  ...(typeof removeEventProperty !== 'undefined' && { removeEventProperty }),
  ...(typeof addCheckedInProperty !== 'undefined' && { addCheckedInProperty })
};