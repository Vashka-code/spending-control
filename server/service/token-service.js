import jwt from 'jsonwebtoken';

import tokenModel from '../models/token-model.js'
import ApiError from '../exceptions/api-error.js';

class TokenService {
  generateTokens(payload) {
    const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {
      expiresIn: '30m'
    });

    const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {
      expiresIn: '30d'
    });

    return {
      accessToken, 
      refreshToken,
    }
  }

  validateAccessToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_ACCESS_TOKEN);

      return userData;
    } catch (e) {
      return null;
    }
  }

  validateRefreshToken(token) {
    try {
      const userData = jwt.verify(token, process.env.JWT_REFRESH_TOKEN);

      return userData;
    } catch (e) {
      return null;
    }
  }

  async saveToken(userId, refreshToken) {
    // TODO: think about few tokens, around 5
    const tokenData = await tokenModel.findOne({user: userId});

    if (tokenData) {
      tokenData.refreshToken = refreshToken;
      
      return tokenData.save();
    }

    const token = await tokenModel.create({user: userId, refreshToken});

    return token;
  }

  async removeToken(refreshToken) {
    const tokenData = await tokenModel.deleteOne({refreshToken});

    return tokenData;
  }

  async findToken(refreshToken) {
    const tokenData = await tokenModel.findOne({refreshToken});

    return tokenData;
  }
}

export default new TokenService;