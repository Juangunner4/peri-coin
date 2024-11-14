module.exports = function override(config, env) {
    // Add a rule to ignore source map warnings for specific packages
    config.module.rules.push({
      test: /\.js$/,
      enforce: 'pre',
      use: ['source-map-loader'],
      exclude: [
        /node_modules\/@solana\/buffer-layout/,
        /node_modules\/superstruct/,
      ],
    });
    return config;
  };
  