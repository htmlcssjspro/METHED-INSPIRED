import { router } from '../router';

export default function getPathName() {
    const pathname = router.getCurrentLocation().hashString;
    return pathname;
}
