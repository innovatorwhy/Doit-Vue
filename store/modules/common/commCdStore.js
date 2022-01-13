import network from '@utils/network/index.js'
import method from '@/constants/method.json'
import { constMaker } from '@utils/common/common.js'

const ModuleName = 'common/commCdStore'

const TYPES = constMaker(
  // PRG_TYPE_CD 프로그램 타입 코드 PG00100
  'CODEGRP_PG00100',
  'CODELIST_PG00100',

  // PRG_ST_CD 프로그램 상태 코드 PG00200
  'CODEGRP_PG00200',
  'CODELIST_PG00200',

  // PRG_TAX_TYPE_CD 프로그램 과세 타입 코드 PG00300
  'CODEGRP_PG00300',
  'CODELIST_PG00300',

  // PRG_EHB_TPL_CD 프로그램 전시 템플릿 코드 PG00400
  'CODEGRP_PG00400',
  'CODELIST_PG00400',

  // EDU_TYPE_CD 교육 종류 코드 PG00500
  'CODEGRP_PG00500',
  'CODELIST_PG00500',

  // EDU_TGT_CD 교육 대상 코드 PG00600
  'CODEGRP_PG00600',
  'CODELIST_PG00600',

  // PRG_PLC_CD 프로그램 장소 코드 PG00700
  'CODEGRP_PG00700',
  'CODELIST_PG00700',

  // EDU_PTP_GEN_CD 교육 참여자 성별 코드 PG01100
  'CODEGRP_PG01100',
  'CODELIST_PG01100',

  // EVT_TYPE_CD 이벤트 타입 코드 PG00800
  'CODEGRP_PG00800',
  'CODELIST_PG00800',

  // EPSD_ST_CD 회차 상태 코드 PG00900
  'CODEGRP_PG00900',
  'CODELIST_PG00900',

  // TC_TYPE_SALES_CD 권종 판매유형 코드 PG01000
  'CODEGRP_PG01000',
  'CODELIST_PG01000',

  // TC_TYPE_CALC_POINT_CD 권종 정산 시점 코드 PG01200
  'CODEGRP_PG01200',
  'CODELIST_PG01200',

  // PM_TYPE_CD 프로모션 타입 코드 PG01300
  'CODEGRP_PG01300',
  'CODELIST_PG01300',

  // EDU_PTP_PRT_REL_CD 교육 참여자 보호자 관계 코드

  // TC_TYPE_TGT_CD 권종 대상 코드 PG01400
  'CODEGRP_PG01400',
  'CODELIST_PG01400',

  // PM_LIMIT_TYPE_CD 프로모션 제한 타입 코드 PG01500
  'CODEGRP_PG01500',
  'CODELIST_PG01500',

  // VIEW_LIMIT_AGE_CD 관람 제한 연령 코드 PG01600
  'CODEGRP_PG01600',
  'CODELIST_PG01600',

  // INFO_EXPS_TYPE_CD 상세소개 타입 코드 PG01700
  'CODEGRP_PG01700',
  'CODELIST_PG01700',

  // ARTIST_EXPS_TYPE_CD 작가 노출 타입 코드 PG01800
  'CODEGRP_PG01800',
  'CODELIST_PG01800',

  // PM_CATEGORY_CD 프로모션 카테고리 코드 PG01900
  'CODEGRP_PG01900',
  'CODELIST_PG01900',

  // EHB_PUB_CD 전시 게시 코드 EB00100
  'CODEGRP_EB00100',
  'CODELIST_EB00100',

  // REZ_STATUS_CD 예약 상태 코드 RZ00100
  'CODEGRP_RZ00100',
  'CODELIST_RZ00100',

  // REZ_TK_STATUS_CD 예약 티켓 상태 코드 RZ00200
  'CODEGRP_RZ00200',
  'CODELIST_RZ00200',

  // SND_STATUS_CD 티켓 선물 전송 상태 코드 RZ00300
  'CODEGRP_RZ00300',
  'CODELIST_RZ00300',

  // RCV_STATUS_CD 티켓 선물 수신 상태 코드 RZ00400
  'CODEGRP_RZ00400',
  'CODELIST_RZ00400',

  // REZ_PAY_STATUS_CD 결제 상태 코드 RZ00500
  'CODEGRP_RZ00500',
  'CODELIST_RZ00500',

  // REZ_PAY_TYPE_CD 결제 수단 코드 RZ00600
  'CODEGRP_RZ00600',
  'CODELIST_RZ00600',

  // CXL_STATUS_CD 취소 상태 코드 RZ00700
  'CODEGRP_RZ00700',
  'CODELIST_RZ00700',

  // CXL_REASON_CD 취소 사유 코드 RZ00800
  'CODEGRP_RZ00800',
  'CODELIST_RZ00800',

  // RZ_CHANNEL_CD 예약채널코드 RZ00900
  'CODEGRP_RZ00900',
  'CODELIST_RZ00900',

  // ISSUE_REASON_CD 핀코드발급사유코드 RZ01000
  'CODEGRP_RZ01000',
  'CODELIST_RZ01000',

  // PIN_CODE_STATUS 핀코드상태 RZ01100
  'CODEGRP_RZ01100',
  'CODELIST_RZ01100',

  // RCV_TYPE_CD 수령 구분 RZ01200
  'CODEGRP_RZ01200',
  'CODELIST_RZ01200',

  // Action, Mutation
  'ACT_SELECT_COMM_CD',
  'MUT_SELECT_COMM_CD',

  // 1510 취소사유 조회
  'CODEGRP_1510',
  'CODELIST_1510'
)

const module = {
  namespaced: true,
  state: {
    [TYPES.CODEGRP_PG00100]: {},
    [TYPES.CODELIST_PG00100]: [],

    [TYPES.CODEGRP_PG00200]: {},
    [TYPES.CODELIST_PG00200]: [],

    [TYPES.CODEGRP_PG00300]: {},
    [TYPES.CODELIST_PG00300]: [],

    [TYPES.CODEGRP_PG00400]: {},
    [TYPES.CODELIST_PG00400]: [],

    [TYPES.CODEGRP_PG00500]: {},
    [TYPES.CODELIST_PG00500]: [],

    [TYPES.CODEGRP_PG00600]: {},
    [TYPES.CODELIST_PG00600]: [],

    [TYPES.CODEGRP_PG00700]: {},
    [TYPES.CODELIST_PG00700]: [],

    [TYPES.CODEGRP_PG00800]: {},
    [TYPES.CODELIST_PG00800]: [],

    [TYPES.CODEGRP_PG00900]: {},
    [TYPES.CODELIST_PG00900]: [],

    [TYPES.CODEGRP_PG01000]: {},
    [TYPES.CODELIST_PG01000]: [],

    [TYPES.CODEGRP_PG01100]: {},
    [TYPES.CODELIST_PG01100]: [],

    [TYPES.CODEGRP_PG01200]: {},
    [TYPES.CODELIST_PG01200]: [],

    [TYPES.CODEGRP_PG01300]: {},
    [TYPES.CODELIST_PG01300]: [],

    [TYPES.CODEGRP_PG01400]: {},
    [TYPES.CODELIST_PG01400]: [],

    [TYPES.CODEGRP_PG01500]: {},
    [TYPES.CODELIST_PG01500]: [],

    [TYPES.CODEGRP_PG01600]: {},
    [TYPES.CODELIST_PG01600]: [],

    [TYPES.CODEGRP_PG01700]: {},
    [TYPES.CODELIST_PG01700]: [],

    [TYPES.CODEGRP_PG01800]: {},
    [TYPES.CODELIST_PG01800]: [],

    [TYPES.CODEGRP_PG01900]: {},
    [TYPES.CODELIST_PG01900]: [],

    [TYPES.CODEGRP_EB00100]: {},
    [TYPES.CODELIST_EB00100]: [],

    [TYPES.CODEGRP_RZ00100]: {},
    [TYPES.CODELIST_RZ00100]: [],

    [TYPES.CODEGRP_RZ00200]: {},
    [TYPES.CODELIST_RZ00200]: [],

    [TYPES.CODEGRP_RZ00300]: {},
    [TYPES.CODELIST_RZ00300]: [],

    [TYPES.CODEGRP_RZ00400]: {},
    [TYPES.CODELIST_RZ00400]: [],

    [TYPES.CODEGRP_RZ00500]: {},
    [TYPES.CODELIST_RZ00500]: [],

    [TYPES.CODEGRP_RZ00600]: {},
    [TYPES.CODELIST_RZ00600]: [],

    [TYPES.CODEGRP_RZ00700]: {},
    [TYPES.CODELIST_RZ00700]: [],

    [TYPES.CODEGRP_RZ00800]: {},
    [TYPES.CODELIST_RZ00800]: [],

    [TYPES.CODEGRP_RZ00900]: {},
    [TYPES.CODELIST_RZ00900]: [],

    [TYPES.CODEGRP_RZ01000]: {},
    [TYPES.CODELIST_RZ01000]: [],

    [TYPES.CODEGRP_RZ01100]: {},
    [TYPES.CODELIST_RZ01100]: [],

    [TYPES.CODEGRP_RZ01200]: {},
    [TYPES.CODELIST_RZ01200]: [],

    [TYPES.CODEGRP_1510]: {},
    [TYPES.CODELIST_1510]: []
  },
  actions: {
    [TYPES.ACT_SELECT_COMM_CD] (context, mstCd) {
      getCodeGroup(mstCd)
        .then(
          codes => {
            const mutPayload = {
              codeGrp: 'CODEGRP_' + mstCd,
              codeList: 'CODELIST_' + mstCd,
              data: codes
            }
            context.commit(TYPES.MUT_SELECT_COMM_CD, mutPayload)
          })
        .catch((e) => {
          console.error('error occured on receiving code : ' + mstCd)
          console.error(e)
        })
    }
  },
  mutations: {
    [TYPES.MUT_SELECT_COMM_CD] (state, payload) {
      const codeGrp = {}
      payload.data.forEach(code => {
        codeGrp[code.dtlCd] = code.dtlNm
      })
      state[TYPES[payload.codeGrp]] = codeGrp
      state[TYPES[payload.codeList]] = payload.data
    }
  },
  modules: {}
}

const getCodeGroup = (mstCd) => {
  return new Promise((resolve, reject) => {
    network.send({
      method: method.POST,
      params: { mstCd: mstCd },
      url: 'v1/code/searchCodeDtl'
    }).then(res => {
      const result = res.data
      if (result.resultCode === '10') {
        resolve(result.data)
      } else {
        reject(new Error('Request code group [' + mstCd + '] not exists.'))
      }
    }).catch(e => {
      reject(e)
    })
  })
}

export {
  TYPES,
  module,
  ModuleName,
  getCodeGroup
}
