import sys
import pandas as pd
import lightgbm as lgb

model = lgb.Booster(model_file='/opt/bitnami/apps/hacknc2019/routes/fraud-model.txt')

df = pd.DataFrame()
df['card1'] = [2755]
df['card2'] = [404.0]
df['card3'] = [150.0]
df['card5'] = [102.0]
df['TransactionAmt'] = [29.0]
df['TransactionDT'] = [86401]
df['addr1'] = [325.0]
df['dist1'] = [0]
df['dist2'] = [0]
df['D4'] = [0.0]
df['D2'] = [0]
df['D10'] = [0.0]
df['D8'] = [0]
df['D1'] = [0.0]
df['D9'] = [0]
df['C13'] = [1.0]
df['C1'] = [1.0]
df['C2'] = [1.0]
df['C4'] = [0.0]
df['C5'] = [0.0]
df['C6'] = [1.0]
df['C7'] = [0.0]
df['C8'] = [0.0]
df['C9'] = [0.0]
df['C10'] = [0.0]
df['C11'] = [1.0]
df['C12'] = [0.0]



df['prediction'] = model.predict(df)

print("hello world " + df['prediction'])