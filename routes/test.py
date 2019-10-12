import sys
import pandas as pd
import lightgbm as lgb

model = lgb.Booster(model_file='/opt/bitnami/apps/hacknc2019/routes/fraud-model.txt')

print("hello world " + sys.argv[1])