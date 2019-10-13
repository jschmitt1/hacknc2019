import sys
import pandas as pd
import lightgbm as lgb

model = lgb.Booster(model_file='/opt/bitnami/apps/hacknc2019/routes/fraud-model1.txt')

df = pd.DataFrame()
# df['card1'] = [2755]
# df['card2'] = [404.0]
# df['card3'] = [150.0]
# df['card5'] = [102.0]
# df['TransactionAmt'] = [29.0]
# df['TransactionDT'] = [86401]
# df['addr1'] = [325.0]
# df['dist1'] = [0]
# df['dist2'] = [0]
# df['D4'] = [0.0]
# df['D2'] = [0]
# df['D10'] = [0.0]
# df['D8'] = [0]
# df['D1'] = [0.0]
# df['D9'] = [0]
# df['C13'] = [1.0]
# df['C1'] = [1.0]
# df['C2'] = [1.0]
# df['C4'] = [0.0]
# df['C5'] = [0.0]
# df['C6'] = [1.0]
# df['C7'] = [0.0]
# df['C8'] = [0.0]
# df['C9'] = [0.0]
# df['C10'] = [0.0]
# df['C11'] = [1.0]
# df['C12'] = [0.0]

#inefficient
df['card1'] = [float(sys.argv[1])]
df['card2'] = [float(sys.argv[2])]
df['card3'] = [float(sys.argv[3])]
df['card5'] = [float(sys.argv[4])]
df['TransactionAmt'] = [float(sys.argv[5])]
df['TransactionDT'] = [float(sys.argv[6])]
df['addr1'] = [float(sys.argv[7])]
df['dist1'] = [float(sys.argv[8])]
df['dist2'] = [float(sys.argv[9])]
df['D4'] = [float(sys.argv[10])]
df['D2'] = [float(sys.argv[11])]
df['D10'] = [float(sys.argv[12])]
df['D8'] = [float(sys.argv[13])]
df['D1'] = [float(sys.argv[14])]
df['D9'] = [float(sys.argv[15])]
df['C13'] = [float(sys.argv[16])]
df['C1'] = [float(sys.argv[17])]
df['C2'] = [float(sys.argv[18])]
df['C4'] = [float(sys.argv[19])]
df['C5'] = [float(sys.argv[20])]
df['C6'] = [float(sys.argv[21])]
df['C7'] = [float(sys.argv[22])]
df['C8'] = [float(sys.argv[23])]
df['C9'] = [float(sys.argv[24])]
df['C10'] = [float(sys.argv[25])]
df['C11'] = [float(sys.argv[26])]
df['C12'] = [float(sys.argv[27])]
df['hour'] = [float(sys.argv[28])]
df['day'] = [float(sys.argv[29])]
df['decimal'] = [float(sys.argv[30])]



somfin = model.predict(df)

print(somfin)