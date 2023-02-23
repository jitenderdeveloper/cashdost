const clientSchema = require("../modules/clients");


const getItems = (req, res) => {
  try {
    clientSchema.find().then((result) => {
      res.status(200).json({
        message: "All clients data",
        client_data: result,
      });
    });
  } catch (error) {
    res.send(error);
  }
};

// const postItems = (req, res) => {
//   try {
//     const client_data = clientSchema({
//       client_logo: req.body.client_logo,
//       price_title: req.body.price_title,
//       offer_description: req.body.offer_description,
//       upto_offer: req.body.upto_offer,
//       store_link: req.body.store_link,
//     });
//     client_data.save().then((result) => {
//       res.status(200).json({
//         message: "Client data is post...",
//         client_data: result,
//       });
//     });
//   } catch (error) {
//     res.send(error);
//   }
// };

const getIdItems = (req, res) => {
  try {
    clientSchema.findById({ _id: req.params.id }).then((result) => {
      res.status(200).json({
        message: "client data get using by id...",
        client_data: result,
      });
    });
  } catch (error) {
    res.send(error);
  }
};

// const putItems = (req, res) => {
//   try {
//     clientSchema.findByIdAndUpdate(
//       { _id: req.params.id },
//       {
//         $set: {
//           client_logo: req.body.client_logo,
//           price_title: req.body.price_title,
//           offer_description: req.body.offer_description,
//           upto_offer: req.body.upto_offer,
//           store_link: req.body.store_link,
//         },
//       }
//     )
//     .then((result) =>{
//         res.status(200).json({
//             message: 'client data is updated...',
//             client_data: result
//         })
//     })
//   } catch (error) {
//     res.send(error);
//   }
// };

const deleteItems = (req, res) => {
    try {
        clientSchema.findByIdAndRemove({_id: req.params.id})
        .then((result) =>{
            res.status(200).json({
                message: 'client data is delete...',
                client_data: result
            })
        })
    } catch (error) {
        res.send(error);
    }
};

module.exports = {
  getItems,
  // postItems,
  getIdItems,
  // putItems,
  deleteItems,
};
