const express = require('express');
const catchErrors = require('express-catch-errors');

const router = express.Router();
const { create, list, remove, update, view,signin } = require('../controller/userController');


router
  .route('/')
  .get(catchErrors(list))
  .post(catchErrors(create));

router
  .route('/:id')
  .get(catchErrors(view))
  .put(catchErrors(update))
  .delete(catchErrors(remove));

router
  .route('/signin')
  .post(catchErrors(signin))

  module.exports = router;