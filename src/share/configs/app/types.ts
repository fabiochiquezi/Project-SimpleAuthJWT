import express from 'express'
export type props = (databaseConnect: () => Promise<void>) => express.Application
