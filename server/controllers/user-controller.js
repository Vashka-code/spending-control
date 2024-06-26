import ApiError from '../exceptions/api-error.js';
import userService from '../service/user-service.js';
import { validationResult } from 'express-validator';

class UserController {
  async registration(req, res, next) {
    try {
      const errors = validationResult(req)

      console.log(errors);
      if (!errors.isEmpty()) {
        return next(ApiError.BadRequest('Validation error', errors.array()));
      }

      const {email, password} = req.body;
      const userData = await userService.registration(email, password);
      
      const expireAge = 30 * 24 * 60 * 60 * 1080;
      
      res.cookie('refreshToken', userData.refreshToken, {
        maxAge: expireAge,
        httpOnly: true, 
      });

      return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async login(req, res, next) {
    try {
        const {email, password} = req.body;
        const userData = await userService.login(email, password);

        // TODO: repeated logic
        const expireAge = 30 * 24 * 60 * 60 * 1080;

        res.cookie('refreshToken', userData.refreshToken, {
          maxAge: expireAge,
          httpOnly: true, 
        });
  
        return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async logout(req, res, next) {
    try {
      const {refreshToken} = req.cookies;
      const token = await userService.logout(refreshToken);
      res.clearCookie('refreshToken');
      return res.json(token);
    } catch (e) {
      next(e);
    }
  }

  async activate(req, res, next) {
    try {
      const activationLink = req.params.link;
      await userServise.activate(activationLink);
      return res.redirect(process.env.CLIENT_URL);
    } catch (e) {
      next(e);
    }
  }

  async refresh(req, res, next) {
    try {
      const { refreshToken } = req.cookies;
      
      const userData = await userService.refresh(refreshToken);

        // TODO: repeated logic
        const expireAge = 30 * 24 * 60 * 60 * 1080;

        res.cookie('refreshToken', userData.refreshToken, {
          maxAge: expireAge,
          httpOnly: true, 
        });
  
        return res.json(userData);
    } catch (e) {
      next(e);
    }
  }

  async getUsers(req, res, next) {
    try {
      const users = await userService.getAllUsers();

      return res.json(users);
    } catch (e) {
      next(e);
    }
  }
}

export default new UserController;